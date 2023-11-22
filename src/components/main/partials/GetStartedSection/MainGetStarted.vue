<template>
  <div>
    <div class="container text-center py-3 mt-5">
      <div class="py-3">
        <p>Start today for getting <span>Online Certification</span></p>
        <h3>You can be your own guiding star with our help!</h3>
        <div class="mt-4">
          <ButtonComponent :text="this.txtButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../../../ButtonComponent.vue";
export default {
  name: "MainGetStarted",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      txtButton: "Get started for free",
    };
  },
};
</script>

<style lang="scss" scoped></style>
