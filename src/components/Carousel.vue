<template lang="html">
  <div class="carousel container">
    <Slick :options="slickOptions">
      <img class="carousel-item" src="../assets/img/carousel-item1.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item2.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item3.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item4.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item5.jpg">
    </Slick>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
      },
    };
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.carousel {
  background-color: $white;
  padding: 8rem 0rem;
}
.carousel-item {
  width: 250px;
  height: 250px;
  margin: 0 auto;
}
</style>
