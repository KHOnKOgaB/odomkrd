<template lang="html">
  <div class="events">
    <div class="events-header shadow text-center" data-aos="fade-up">
      <h1 class="h1-font text-uppercase h1-shadow text-white">наши рубрики</h1>
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
.h1-shadow {
  text-shadow: 2px 2px 3px black;
}
</style>
