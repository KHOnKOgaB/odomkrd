<template lang="html">
  <video-bg :sources="[require('../assets/media/background.mp4')]"
            :img="require('../assets/img/fp_background.png')"
            class="banner d-flex flex-column">
      <Header></Header>
      <div class="text-center my-auto banner-text">
        <h1 class="text-uppercase text-white h1-font">"он даст покой<br> твоей душе"</h1>
        <p class="text-uppercase text-white mt-5 info">добро пожаловать в церковь</p>
      </div>
  </video-bg>
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

<style lang="scss">
@import '../assets/scss/main.scss';
.VideoBg__content {
  display: flex;
  flex-direction: column;
}
.banner {
  // background: url('../assets/img/fp_background.png') no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
}
.info {
  font-size: 1.5rem;
}
.banner-text {
  z-index: 10;
}
</style>
