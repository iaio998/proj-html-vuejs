<template>
  <header>
    <HeaderComponent />
  </header>
  <main></main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
