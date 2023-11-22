<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <MainComponent />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
