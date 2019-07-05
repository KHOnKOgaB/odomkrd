<template lang="html">
  <div class="banner d-flex flex-column">
      <Header></Header>
      <div class="text-center my-auto">
        <h1 class="text-uppercase text-white h1-font">церковь <br> "отчий дом"</h1>
        <p class="text-uppercase text-white mt-5 info">наша история</p>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.banner {
  background: url('../assets/img/about_bg.png') no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.info {
  font-size: 1.5rem;
}
</style>
