<template>
  <header>
    <nav class="container py-4 px-5">
      <NavbarComponent />
    </nav>
    <div class="jumbotron container text-center py-2">
      <h2 class="fs-2">Learn At Your Own Pace</h2>
      <p class="m-0">Get teamed up with people of the same will.</p>
      <ButtonComponent class="mt-4" />
      <div class="img-cont d-flex">
        <img src="/images-2/video-screen.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import NavbarComponent from "./partials/NavbarComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";

export default {
  name: "HeaderComponent",
  components: {
    NavbarComponent,
    ButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
header {
  color: $color-white;
  background-color: $color-purple;
  // background-image: url("../../public/images");
  .img-cont {
    width: 800px;
    margin: 0 auto;
    img {
      width: 100%;
      transform: translate(0, 130px);
      border: 20px solid $color-white;
      border-radius: 20px;
    }
  }
}
</style>
