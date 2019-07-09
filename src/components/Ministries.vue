<template lang="html">
<div class="ministries">
    <b-container fluid class="p-0">
      <div class="ministries-header">
        <h1 class="h1-font text-white text-uppercase text-center">жизнь церкви</h1>
      </div>
    </b-container>
    <b-container class="ministr-container position-relative">
      <b-row v-for="(item, index) in items" :key="index" class="justify-content-around mb-5 ministr-border">
        <b-col data-aos="fade-right" cols="12" lg="6" class="my-auto">
          <h3 class="h3-font text-uppercase">{{item.title}}</h3>
          <p class="article mt-4">{{item.body}}</p>
        </b-col>
        <b-col data-aos="fade-left" cols="12" lg="4" class="my-auto">
          <img class="ministr-img" :src="item.img">
        </b-col>
      </b-row>
    </b-container>
    <Instagram></Instagram>
  </div>
</template>

<script>
import Instagram from './Instagram.vue';

export default {
  data() {
    return {
      items: [
        {
          title: 'Домашние группы',
          body:'Мы верим, что общение — неотъемлемая часть жизни христианина. И очень важно, чтобы общение не было просто поверхностным. Домашние группы — это возможность получить более глубокие отношения, молитвенную и эмоциональную поддержку, возможность разбирать Слово и получать ответы на интересующие вопросы. В нашей церкви Домашних групп несколько, поэтому каждый сможет найти для себя именно то окружение, в котором ему будет комфортно.',
          img: require('../assets/img/homegroups.jpg'),
        },
        {
          title: 'Молодежное служение',
          body:'12 января 2018 года молодежная команда организовала первое молодежное собрание, и с этого дня оно стало проходить в нашей церкви на регулярной основе. Каждое воскресенье молодежь приходит в церковь на полноценное богослужение, единственное отличие от утреннего — формат: молодежь общается на своем языке, а потому ей нужен свой — современный — подход. Еще одна часть служения, ставшая уже неотъемлемой, — созданное молодежью нашей церкви кафе «Хлеб&Хлев», благодаря которому после собрания у молодых ребят есть возможность пообщаться и перекусить.',
          img: require('../assets/img/odom_youth.jpg'),
        },
        {
          title: 'Мир без стен',
          body:'Люди — главная ценность. Поэтому мы стараемся помочь тем, кто как-то ограничен в своих возможностях. Наша церковь является частью особенного служения. Для людей с инвалидностью мы устраиваем встречи, где можно просто познакомиться и пообщаться, тематические вечера, поездки. Мы хотим, чтобы каждый человек чувствовал себя принятым и нужным. Мы верим, что возможно жить в мире, где отсутствуют границы, разделяющие людей на группы.',
          img: require('../assets/img/mbs.jpg'),
        }
      ],
    }
  },
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
.ministr-container {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.ministr-border {
  &::after {
    content: '';
    height: 1px;
    background: #D3D3D3;
    width: 100%;
    margin-top: 3rem;
  }
}
.ministr-img {
  width: 100%;
}

</style>
