<template>
    <div class="container-dark w-100">
        <div class="container  py-5">
            <Loader v-if="!project" />

            <div v-if="project">
                <h2 class="title-color pb-3">Project: {{ project.title }}</h2>
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card card-dark ">
                            <div class="card-title">
                                <h3>{{ project.title }}</h3>
                            </div>
                            <div class="card-body d-flex justify-content-between align-items-end">
                                <div>
                                    <h6 class="pb-3">Type: {{ project.type.tech }}</h6>
                                    <h6>Tags:</h6>
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
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default {
    name: 'ShowProject',
    components: {
        Loader,
    },
    data() {
        return {
            project: null,
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/project/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                if (res.data.status) {
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