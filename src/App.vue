<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <MainComponent />
  </main>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
