<template lang="html">
  <div class="carousel container position-relative">
    <font-awesome-icon @click="prev" class="arrows arrow-left" icon="chevron-left"/>
    <Slick
    ref="slick"
    :options="slickOptions">
      <a href="https://www.youtube.com/playlist?list=PLgg3n8VP4oqp_t_mbRzHzvm1tI8wORYLL"><img class="carousel-item" src="../assets/img/carousel-item1.jpg"></a>
      <img class="carousel-item" src="../assets/img/carousel-item2.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item3.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item4.jpg">
      <img class="carousel-item" src="../assets/img/carousel-item5.jpg">
    </Slick>
    <font-awesome-icon @click="next" class="arrows arrow-right" icon="chevron-right"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
    };
  },
  methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },
      },
}
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.carousel {
  background-color: $white;
  margin-top: 10rem;
  margin-bottom: 10rem;
  @include media-breakpoint-down(sm) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}
.slick-list {
  text-align: center;
}
.carousel-item {
  display: block !important;
  width: 270px !important;
  height: 270px !important;
  margin: 0 auto !important;
}
.slick-slide {
  display: flex !important;
  justify-content: center;
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
