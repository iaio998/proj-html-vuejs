<template>
  <div>
    <div class="container text-center py-5">
      <h3 class="fs-1 fw-bold">
        Why People Talk About <span class="fw-normal marked">MaxCoach</span>?
      </h3>
      <!-- SLIDER -->
      <swiper
        :slidesPerView="1"
        :loop="true"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="col-12 py-5" v-for="el in store.testimonials">
          <div class="d-flex justify-content-center align-items-center gap-4">
            <div class="img-cont">
              <img :src="el.image" :alt="el.name" />
            </div>
            <div class="text-start ps-5 w-50">
              <h3 class="mb-3 fs-2 fw-normal">{{ el.text }}</h3>
              <p class="name fw-bold pt-4">{{ el.name }}</p>
              <p>{{ el.job }}</p>
            </div>
          </div></swiper-slide
        >
      </swiper>
      <!-- <div
        class="row flex-nowrap overflow-hidden py-5"
        ref="slider"
        @click="scrollRight()"
        @dblclick="scrollLeft()"
      >
        <div
          class="col-12 py-5"
          v-for="el in store.testimonials"
          :key="el.idTestimonial"
        >
          <div class="d-flex justify-content-center align-items-center gap-4">
            <div class="img-cont">
              <img :src="el.image" :alt="el.name" />
            </div>
            <div class="text-start ps-5 w-50">
              <h3 class="mb-3 fs-2 fw-normal">{{ el.text }}</h3>
              <p class="name fw-bold pt-4">{{ el.name }}</p>
              <p>{{ el.job }}</p>
            </div>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper/modules";

export default {
  name: "MainThirdSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
  data() {
    return {
      store,
      activeId: 1,
    };
  },
  methods: {
    // scrollRight() {
    //   let slider = this.$refs.slider;
    //   if (this.activeId !== this.store.testimonials.length) {
    //     this.activeId++;
    //     slider.scrollBy({
    //       left: slider.offsetWidth,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     this.activeId = 1;
    //     slider.scrollBy({
    //       left: -9999,
    //       behavior: "smooth",
    //     });
    //   }
    // },
    // scrollLeft() {
    //   let slider = this.$refs.slider;
    //   if (this.activeId !== 1) {
    //     this.activeId--;
    //     slider.scrollBy({
    //       left: -slider.offsetWidth,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     this.activeId = this.store.testimonials.length;
    //     slider.scrollBy({
    //       left: 9999,
    //       behavior: "smooth",
    //     });
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.marked {
  color: $color-marker;
}
.name {
  color: $color-black-secondary;
}
p {
  color: $color-grey;
}
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
  width: 150px;
  height: 150px;

  img {
    max-width: 100%;
  }
}
</style>
