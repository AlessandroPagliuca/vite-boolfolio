<template>
    <div class="w-100 bg-dark" id="product-list" style="height: 100vh;">
        <div class="container py-5" style="height: 100vh;">
            <router-link :to="{ name: 'projects' }" class="btn btn-primary"> Go to Projects </router-link>

        </div>
    </div>
</template>

<script>
import router from '../routes/router';


export default {
    components: { router }
}
</script>

<style lang="scss" scoped></style>