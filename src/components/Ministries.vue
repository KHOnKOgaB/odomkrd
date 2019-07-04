<template lang="html">
  <div class="ministries">
    <div class="ministries-header">
      <h1 class="h1-font text-white text-uppercase text-center">жизнь церкви</h1>
    </div>
    <b-container class="minintr-container">
      <b-row class="justify-content-around">
        <b-col cols="12" lg="6" class="my-auto">
          <h3 class="h3-font text-uppercase">Домашние группы</h3>
          <p class="article mt-5">Мы верим, что общение — неотъемлемая часть жизни христианина. И очень важно, чтобы общение не было просто поверхностным.
            Домашние группы — это возможность получить более глубокие отношения, молитвенную и эмоциональную поддержку, возможность разбирать Слово и получать ответы на интересующие вопросы.
            В нашей церкви Домашних групп несколько, поэтому каждый сможет найти для себя именно то окружение, в котором ему будет комфортно.</p>
        </b-col>
        <b-col cols="12" lg="4" class="my-auto">
          <img class="ministr-img" src="../assets/img/homegroups.jpg">
        </b-col>
      </b-row>
    </b-container>
    <Instagram></Instagram>
  </div>
</template>

<script>
import Instagram from './Instagram.vue';

export default {
  components: {
    Instagram
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.ministries-header {
  background: url('../assets/img/church_life.png') no-repeat;
  background-size: cover;
  padding: 5rem 0rem;
}
.minintr-container {
  padding: 8rem 0rem;
}
.ministr-img {
  width: 100%;
}

</style>
