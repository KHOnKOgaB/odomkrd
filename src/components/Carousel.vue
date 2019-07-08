<template lang="html">
  <div class="carousel container position-relative">
    <font-awesome-icon class="arrows arrow-left" icon="chevron-left"/>
    <Slick :options="slickOptions">
      <img class="carousel-item" src="../assets/img/carousel-item1.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item2.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item3.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item4.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item5.jpg">
    </Slick>
    <font-awesome-icon class="arrows arrow-right" icon="chevron-right"/>
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
  padding: 10rem 0rem;
}
.carousel-item {
  width: 250px;
  height: 250px;
  margin: 0 auto;
}
.arrows {
  color: $black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  transition: 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: #FFCB26;
  }
}
.arrow-left {
  left: -2rem;
}
.arrow-right {
  right: -2rem;
}
</style>
