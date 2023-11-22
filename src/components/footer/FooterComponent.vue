<template>
  <footer class="external py-5">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <AddressComponent />
        </div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import AddressComponent from "./partials/AddressComponent.vue";
export default {
  name: "FooterComponent",
  components: { AddressComponent },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
.external {
  background-color: $color-white-secondary;
}
</style>
