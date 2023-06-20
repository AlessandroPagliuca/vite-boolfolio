<template>
    <div class="container-fluid bg-nav ">
        <nav class="navbar navbar-light d-flex justify-content-start ">
            <h1 class="text-uppercase title-color">portfolio</h1>


            <ul class="navbar-nav d-flex flex-row ">
                <li class="nav-item active px-3" v-for="(link, index) in nav" :key="index">
                    <router-link :to="{ name: link.NameRoute }" class="nav-link title-color" active-class="active">
                        {{ link.label }}
                    </router-link>
                </li>

            </ul>

        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
        return {
            nav: [
                {
                    label: 'Home',
                    NameRoute: 'home'
                },
                {
                    label: 'Projects',
                    NameRoute: 'projects'
                },
                {
                    label: 'Contacts',
                    NameRoute: 'contacts'
                }


            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>