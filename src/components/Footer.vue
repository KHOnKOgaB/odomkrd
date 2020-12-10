<template lang="html">
  <div class="footer text-center">
    <div class="social mb-3">
      <b-nav class="d-flex justify-content-center">
        <b-nav-item href="https://www.instagram.com/odomkrd/">
          <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
        </b-nav-item>
        <b-nav-item href="https://vk.com/odomkrd">
          <font-awesome-icon class="social-icon" :icon="['fab', 'vk']" />
        </b-nav-item>
        <b-nav-item href="https://www.youtube.com/channel/UCTKXg01q41ORpRbPbxwTVxQ">
          <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" />
        </b-nav-item>
      </b-nav>
    </div>
    <div class="contacts">
      <div class="contacts-item mb-2"><a href="tel: +79649388737">+7(964)-938-87-37</a></div>
      <div class="contacts-item mb-2"><a target="_blank" href="https://yandex.ru/maps/-/CCgaFXJ1">г. Краснодар, ул. Стадионная, д. 45</a></div>
      <div class="contacts-item"><a href="mailto:odomkrd@gmail.com">odom.krd@gmail.com</a></div>
    </div>
    <div class="legals text-white mt-4">
        <div class="legals-item mb-2">Местная религиозная организация Церковь Христиан Веры Евангельской "Отчий дом" г. Краснодар</div>
        <div class="legals-item mb-2">ОГРН 1062300005932 /// ИНН 2310115750 /// Свидетельство о государственной регистрации №23006727262 от 25.04.2006 года</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.footer {
  background-color: #2f2f2f;
  padding: 2rem 0rem;
}
.social-icon {
  color: $white;
  font-size: 1.5rem;
  transition: 0.2s ease-out;
  &:hover {
    transform: scale(1.2);
    color: #FFCB26;
  }
}
.nav-link {
  padding: 0.5rem 0.5rem;
}
.contacts-item {
  a {
    text-decoration: none;
    transition: 0.2s ease-out;
    color: $white;
    &:hover {
      transform: scale(1.2);
      color: #FFCB26;
    }
  }
}
.legals {

}
</style>
