<template>
    <div class="container-dark" id="product-list">
        <div class="container py-5">
            <h1 class="title-color">Alessandro Pagliuca</h1>
            <small class="fw-semibold text-white">Full Stack Web Developer</small>

            <section class="pt-5">
                <h2 class="display-5 fw-bold title-color">
                    Welcome to my Portfolio
                </h2>
                <ul class="link-ul d-flex align-content-end justify-content-end ">
                    <li>
                        <a href="https://www.instagram.com/alessandro.ap__">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li class="mx-3">
                        <a href="https://www.linkedin.com/in/alessandro-pagliuca-933a801b3">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/AlessandroPagliuca">
                            <i class="fa-brands fa-square-github"></i>
                        </a>
                    </li>
                </ul>
            </section>

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