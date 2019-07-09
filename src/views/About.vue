<template>
  <div class="about">
    <vue-headful
    title="Наша история и во что мы верим"
    description="Церковь, в которой рады каждому"
    />
    <AboutBanner></AboutBanner>
    <Pastor></Pastor>
    <Faith></Faith>
    <Footer></Footer>
  </div>
</template>

<script>
import AboutBanner from '../components/AboutBanner.vue';
import Pastor from '../components/Pastor.vue';
import Faith from '../components/Faith.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'about',
  components: {
    AboutBanner,
    Pastor,
    Faith,
    Footer
  }
}
</script>
