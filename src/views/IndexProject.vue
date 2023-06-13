<template>
    <div class="w-100 bg-dark" id="product-list" style="height: 100vh;">
        <div class="container py-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(project, index) in projects" :key="project.id">
                    <div class="card" style="width: 200px; height: 200px;">
                        <div class="card-title">
                            <h3>{{ project.title }}</h3>
                        </div>
                        <div class="card-body d-flex justify-content-between align-items-end">
                            <div>
                                <h6>{{ project.type.tech }}</h6>
                                <!-- <RouterLink :to="`/show-project/${project.slug}`" class="btn btn-primary">
                                show </RouterLink> -->

                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-12" style="width: fit-content;">
                    <nav aria-label="Page navigation example" class="py-5">
                        <ul class="pagination">
                            <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                                    @click="getData(currentPage - 1)">Previous</button></li>
                            <li class="page-item" v-for="n in lastPage"><button
                                    :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n
                                    }}</button>
                            </li>

                            <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 4 }"
                                    @click="getData(currentPage + 1)">Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    'name': 'App',
    data() {
        return {
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/projects`, {
                params: {
                    'page': numPage,
                }
            }).then((res) => {
                this.projects = res.data.results.data;
                this.project = res.data.results.data.slug;

                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            })
        },

        // singPage(singlePage) {
        //     axios.get(`${this.apiUrl}/project/${slug}`).then((res) => {
        //         this.project = res.data.results.data.slug;

        //     })
        // }
    },
    mounted() {
        this.getData(1);
    }
}

</script>

<style lang="scss" scoped></style>