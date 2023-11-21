<template>
  <div>
    <div class="container text-center py-5">
      <h3 class="fs-1">Why People Talk About <span>MaxCoach</span>?</h3>
      <div class="row flex-nowrap overflow-hidden py-5">
        <div
          class="anim col-12 py-5"
          v-for="el in store.testimonials"
          :id="el.idTestimonial"
        >
          <div class="d-flex justify-content-center align-items-center gap-4">
            <div class="img-cont">
              <img :src="el.image" :alt="el.name" />
            </div>
            <div class="text-start ps-5 w-50">
              <h3 class="mb-3 fs-2">{{ el.text }}</h3>
              <p>{{ el.name }}</p>
              <p>{{ el.job }}</p>
            </div>
          </div>
        </div>
      </div>
      <ul class="d-flex justify-content-between align-items-center px-5">
        <li v-for="el in store.clients">
          <div class="clients">
            <img :src="el.logo" :alt="el.name" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../../../../data/store";

export default {
  name: "MainThirdSection",
  data() {
    return {
      store,
      activeId: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.img-cont {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.clients {
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
