<template>
  <HeaderComp />
  <router-view></router-view>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
  }

}
</script>

<style lang="scss" scoped></style>