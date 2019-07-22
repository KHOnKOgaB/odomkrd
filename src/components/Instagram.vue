<template lang="html">
  <b-container class="instagram">
    <b-row class="justify-content-around mb-5">
      <b-col
      v-for="(item, index) in photos"
      :key="index"
      cols="12"
      sm="12"
      lg="4"
      md="6"
      class="text-center">
        <a target="_blank" :href="item.link"><img class="inst-img" :src="item.thumbnail"></a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      photos: [],
    }
  },
  created(){
    this.axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FfNgJV1zh5PRJtd7z.xml')
    .then(res => {
        this.photos = res.data.items.slice(0,3);
    }
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.instagram {
  background-color: $white;
  padding-top: 2rem;
  padding-bottom: 8rem;
  @include media-breakpoint-down(sm) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.inst-img {
  width: 300px;
  height: 300px;
  @include media-breakpoint-down(sm) {
    max-width: 100%;
    width: 225px;
    height: 225px;
    object-fit: cover;
  }
  &:first-child {
    margin-bottom: 2rem;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
