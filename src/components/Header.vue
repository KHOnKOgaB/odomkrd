<template lang="html">
  <div class="container header-container p-0">
    <b-navbar toggleable="lg" type="dark" class="pt-3">
      <b-navbar-brand>
          <b-link to="/"><img src="../assets/img/church_logo.svg"></b-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar"></b-navbar-toggle>

      <b-collapse id="navbar" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="text-uppercase">главная</b-nav-item>
          <b-nav-item class="text-uppercase">медиа</b-nav-item>
          <b-nav-item class="text-uppercase">мечтай</b-nav-item>
          <b-nav-item to="/about" class="text-uppercase">о нас</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';

</style>
