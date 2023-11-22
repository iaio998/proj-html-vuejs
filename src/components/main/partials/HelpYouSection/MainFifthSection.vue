<template>
  <div class="external">
    <div class="container text-center py-4">
      <p>WANNA TRANSFORM YOUR LIFE?</p>
      <h3>Glad to <span>Help You</span> Learn</h3>
      <div class="row g-5 py-5">
        <CardHelpYou
          v-for="el in store.services"
          :font="el.fontAwesome"
          :title="el.title"
          :text="el.text"
        />
      </div>
      <div class="img-cont">
        <img src="images/home-6-services-image-1024x411.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CardHelpYou from "./CardHelpYou.vue";
import { store } from "../../../../data/store";
export default {
  name: "MainFifthSection",
  components: { CardHelpYou },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.external {
  background-color: #eff1f4;
  .img-cont {
    transform: translate(0, 52px);
  }
}
</style>
