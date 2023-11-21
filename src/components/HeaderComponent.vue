<template>
  <header>
    <nav class="container">
      <NavbarComponent />
    </nav>
    <div class="jumbotron container text-center">
      <h2>Hi</h2>
    </div>
  </header>
</template>

<script>
import NavbarComponent from "./partials/NavbarComponent.vue";

export default {
  name: "HeaderComponent",
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
header {
  color: $color-white;
  background-color: $color-purple;
  // background-image: url("../../public/images");
}
</style>
