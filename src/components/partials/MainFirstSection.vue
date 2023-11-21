<template>
  <div>
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-12 text-center w-50 py-5">
          <h3 class="py-5">
            Let passion and determination be the guide along the way and develop
            at your own pace that's comfortable
          </h3>
          <h4>Fannie Moreno</h4>
          <p>/Founder & CEO</p>
        </div>
      </div>
      <div class="row">
        <div class="col-3 text-center px-2" v-for="el in datas">
          <h3>{{ el.val }}</h3>
          <p>{{ el.name }}</p>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-6 d-flex">
          <div class="mb-5 px-5">
            <CardComponentTop />
            <CardComponentTop />
          </div>
          <div class="mt-5 px-5">
            <CardComponentTop />
            <CardComponentTop />
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponentTop from "./CardComponentTop.vue";
export default {
  name: "MainFirstSection",
  components: {
    CardComponentTop,
  },
  data() {
    return {
      datas: [
        {
          name: "FINISHED SESSIONS",
          val: "1.926",
          datasId: 1,
        },
        {
          name: "ENROLLED LEARNERS",
          val: "3.902+",
          datasId: 2,
        },
        {
          name: "ONLINE INSTRUCTORS",
          val: "200",
          datasId: 3,
        },
        {
          name: "SATISFACTION RATE",
          val: "100%",
          datasId: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
