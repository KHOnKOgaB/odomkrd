<template lang="html">
  <b-container class="instagram">
    <b-row class="justify-content-around mb-5">
      <b-col
      v-for="(item, index) in photos"
      :key="index"
      cols="12"
      lg="4">
        <a :href="item.link"><img class="inst-img" :src="item.img"></a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      photos: [
        {
          link: 'https://www.instagram.com/p/BvyfEjRFOi8/',
          img: require('../assets/img/inst1.png')
        },
        {
          link: 'https://www.instagram.com/p/BvWcdAzF5lF/',
          img: require('../assets/img/inst2.png')
        },
        {
          link: 'https://www.instagram.com/p/BvPMXmHljl3/',
          img: require('../assets/img/inst3.png')
        },
        {
          link: 'https://www.instagram.com/p/BvJXAPpls5s/',
          img: require('../assets/img/inst4.png')
        },
        {
          link: 'https://www.instagram.com/p/Bu8DVGQl3Dw/',
          img: require('../assets/img/inst5.png')
        },
        {
          link: 'https://www.instagram.com/p/Bu1argTFz1e/',
          img: require('../assets/img/inst6.png')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.instagram {
  background-color: $white;
  padding: 2rem 0rem 8rem;
}
.inst-img {
  width: 294px;
  height: 294px;
  &:first-child {
    margin-bottom: 2rem;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
