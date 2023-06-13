<template>
    <div class="container" id="product-list">
        show
        <!-- <div class="row gy-4 mb-4">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-title">
                        <h3>{{ project.title }}</h3>
                    </div>
                    <div class="card-body d-flex justify-content-between align-items-end">
                        <div>
                            <h6>{{ project.type.tech }}</h6>
                            <div v-for="tag in tags">
                                <span>{{ tag.name }}</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>

export default {
    name: 'ShowProject',
    // data() {
    //     return {
    //         projects: [],
    //         apiUrl: 'http://127.0.0.1:8000/api',
    //         currentPage: 1,
    //         lastPage: null,
    //     }
    // },
    // methods: {
    //     getData() {
    //         axios.get(`${this.apiUrl}project/${slug}`).then((res) => {
    //             this.project = res.data.results.data.slug;

    //         })
    //     }
    // },
}
</script>

<style lang="scss" scoped></style>