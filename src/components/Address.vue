<template lang="html">
  <div class="address text-center container">
    <p class="mb-4">г. Краснодар, ул. Стадионная, д. 45</p>
    <p class="mb-4">Воскресенье 10:00</p>
    <b-button  variant="primary-outline how-to" href="https://yandex.ru/maps/-/CCgaFXJ1" class="text-uppercase shadow">
        как проехать
    </b-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.address {
  background-color: $white;
  padding: 5rem 0;
}
.how-to {
  border: 1px solid $black;
  &:hover {
    color: #FFCB26;
    border-color: #FFCB26;
  }
}
</style>
