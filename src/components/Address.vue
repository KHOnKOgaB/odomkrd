<template lang="html">
  <div class="address text-center container">
    <p>г. Краснодар, ул. Стадионная, д. 45</p>
    <p>Воскресенье 10:00</p>
    <b-button  variant="primary-outline" href="https://yandex.ru/maps/-/CCgaFXJ1" class="text-uppercase border-primary">
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
</style>
