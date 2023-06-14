<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-title">
                <h3>{{ project.title }}</h3>
            </div>

            <div class="card-body d-flex justify-content-between align-items-end">
                <div>
                    <h6>{{ project.type.tech }}</h6>
                </div>

                <p class="card-text">
                    <router-link :to="{ name: 'show-project', params: { slug: project.slug } }" class="btn btn-primary">
                        Show project
                    </router-link>

                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
}
</script>

<style lang="scss" scoped></style>