<template lang="html">
  <b-container class="instagram">
    <b-row class="justify-content-around mb-5">
      <b-col
      v-for="(item, index) in photos"
      :key="index"
      cols="12"
      lg="4">
        <a :href="item.link"><img class="inst-img" :src="item.thumbnail"></a>
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
