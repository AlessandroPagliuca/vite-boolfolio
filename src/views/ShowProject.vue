<template>
    <div class="container">

        <div v-if="project">
            <div class="row gy-4 mb-4">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-title">
                            <h3>{{ project.title }}</h3>
                        </div>
                        <div class="card-body d-flex justify-content-between align-items-end">
                            <div>
                                <h6>{{ project.type.tech }}</h6>
                                <div v-for="tag in project.tags">
                                    <span>{{ tag.name }}</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ShowProject',
    data() {
        return {
            project: null,
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                if (res.data.success) {
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
        this.getProject();
    }
}
</script>

<style lang="scss" scoped></style>