<template lang="html">
  <div class="events">
    <div class="events-header shadow text-center">
      <h1 class="h1-font text-uppercase text-white">мероприятия</h1>
    </div>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';

export default {
  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.events {

}
.events-header {
  background: url('../assets/img/events.png') no-repeat;
  background-size: cover;
  padding: 5rem 0rem;
}
</style>
