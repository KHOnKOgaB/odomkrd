<template lang="html">
  <b-container class="instagram">
    <b-row class="justify-content-around mb-5">
      <b-col
      v-for="(item, index) in photos"
      :key="index"
      cols="6"
      sm="6"
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
    this.axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2F2vmUi4oj7qt3336a.xml')
    .then(res => {
        this.photos = res.data.items.slice(0,6);
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
  width: 294px;
  height: 294px;
  @include media-breakpoint-down(sm) {
    max-width: 100%;
    height: 150px;
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
