<template lang="html">
  <b-container class="instagram">
    <b-row class="justify-content-around mb-5">
      <b-col cols="12" lg="3">
        <a href="https://www.instagram.com/p/BvyfEjRFOi8/"><img class="inst-img" src="../assets/img/inst1.png"></a>
        <a href="https://www.instagram.com/p/BvJXAPpls5s/"><img class="inst-img" src="../assets/img/inst4.png"></a>
      </b-col>
      <b-col cols="12" lg="3">
        <a href="https://www.instagram.com/p/BvWcdAzF5lF/"><img class="inst-img" src="../assets/img/inst2.png"></a>
        <a href="https://www.instagram.com/p/Bu8DVGQl3Dw/"><img class="inst-img" src="../assets/img/inst5.png"></a>
      </b-col>
      <b-col cols="12" lg="3">
        <a href="https://www.instagram.com/p/BvPMXmHljl3/"><img class="inst-img" src="../assets/img/inst3.png"></a>
        <a href="https://www.instagram.com/p/Bu1argTFz1e/"><img class="inst-img" src="../assets/img/inst6.png"></a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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
}
</style>
