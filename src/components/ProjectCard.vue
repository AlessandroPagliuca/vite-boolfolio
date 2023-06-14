<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-dark">
            <div class="card-title">
                <h3>{{ project.title }}</h3>
            </div>

            <div class="card-body">
                <div class="pb-3">
                    <h6>Type: {{ project.type.tech }}</h6>
                </div>


                <router-link :to="{ name: 'show-project', params: { slug: project.slug } }" class="btn btn-primary">
                    Show project
                </router-link>


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