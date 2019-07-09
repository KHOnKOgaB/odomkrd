<template>
  <div class="home">
    <vue-headful
    title="Добро пожаловать в церковь 'Отчим Дом' г. Краснодара"
    description="Церковь, в которой рады каждому"
    />
    <Banner></Banner>
    <Address></Address>
    <Events></Events>
    <Ministries></Ministries>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Address from '../components/Address.vue';
import Events from '../components/Events.vue';
import Ministries from '../components/Ministries.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Banner,
    Address,
    Events,
    Ministries,
    Footer
  }
}
</script>
