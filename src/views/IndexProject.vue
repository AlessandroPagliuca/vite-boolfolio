<template>
    <div class="w-100 container-dark " id="product-list">
        <div class="container py-5">

            <h2 class="title-color pb-3">{{ title }}</h2>
            <Loader v-if="projects.length === 0" />
            <div class="row justify-content-center align-items-center">

                <ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" />

            </div>
            <div class="" style="width: fit-content;">
                <nav aria-label="Page navigation example" class="py-5">
                    <ul class="pagination">
                        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                                @click="getData(currentPage - 1)">Previous</button></li>
                        <li class="page-item" v-for="n in lastPage"><button
                                :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n
                                }}</button>
                        </li>

                        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                                @click="getData(currentPage + 1)">Next</button></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import Loader from '../components/Loader.vue';


export default {
    name: 'IndexProject',
    components: {
        ProjectCard,
        Loader,
    },
    data() {
        return {
            title: 'Projects',
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
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            })
        },

    },
    mounted() {
        this.getData(1);
    }
}

</script>

<style lang="scss" scoped></style>