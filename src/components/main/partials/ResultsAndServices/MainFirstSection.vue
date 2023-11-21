<template>
  <div>
    <div class="container py-5">
      <!-- SECTION 1 -->
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
      <!-- SECTION2  -->
      <div class="row">
        <div class="col-3 text-center px-2" v-for="el in datas">
          <h3>{{ el.val }}</h3>
          <p>{{ el.name }}</p>
        </div>
      </div>
      <!-- SECTION 3 -->
      <div class="row py-5">
        <div class="col-6 d-flex">
          <div class="mb-5 pe-4">
            <CardComponentTop class="my-5" />
            <CardComponentBot />
          </div>
          <div class="mt-5 ps-4">
            <CardComponentTop class="my-5" />
            <CardComponentBot />
          </div>
        </div>
        <div class="col-6 p-5 d-flex flex-column justify-content-center">
          <div class="w-75">
            <p>TOGETHER WE CAN CREATE</p>
            <h3 class="fs-1">
              Services We <span>Can Provide</span> For My Clients.
            </h3>
            <ul>
              <li v-for="el in services">
                <i class="fa-solid fa-check pe-3"></i>
                {{ el.text }}
              </li>
            </ul>
            <button type="button" class="btn btn-primary rounded-2 fs-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponentTop from "./CardComponentTop.vue";
import CardComponentBot from "./CardComponentBot.vue";
export default {
  name: "MainFirstSection",
  components: {
    CardComponentTop,
    CardComponentBot,
  },
  data() {
    return {
      datas: [
        {
          name: "FINISHED SESSIONS",
          val: "1.926",
          serviceId: 1,
        },
        {
          name: "ENROLLED LEARNERS",
          val: "3.902+",
          serviceId: 2,
        },
        {
          name: "ONLINE INSTRUCTORS",
          val: "200",
          serviceId: 3,
        },
        {
          name: "SATISFACTION RATE",
          val: "100%",
          serviceId: 4,
        },
      ],
      services: [
        {
          text: "Select & customize courses to your preferences",
          serviceId: 1,
        },
        {
          text: "Partecipate in events to join others",
          serviceId: 2,
        },
        {
          text: "Change the tutor and make the arrangements",
          serviceId: 3,
        },
        {
          text: "Get the desidered certificate delivered at house",
          serviceId: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.fa-check {
  color: $color-marker;
}
</style>
