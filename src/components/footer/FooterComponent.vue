<template>
  <footer class="external py-5">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <AddressComponent />
        </div>
        <div class="col-3">
          <ExploreComponent />
        </div>
        <div class="col-3">
          <InformationComponent />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AddressComponent from "./partials/AddressComponent.vue";
import ExploreComponent from "./partials/ExploreComponent.vue";
import InformationComponent from "./partials/InformationComponent.vue";
export default {
  name: "FooterComponent",
  components: {
    AddressComponent,
    ExploreComponent,
    InformationComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
.external {
  background-color: $color-white-secondary;
}
</style>
