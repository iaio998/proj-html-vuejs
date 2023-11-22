<template>
  <div>
    <div class="container py-5">
      <!-- SECTION 1 -->
      <div class="row justify-content-center py-5">
        <div class="col-12 text-center w-50 py-5">
          <h3 class="fw-bold fs-2 py-5">
            Let passion and determination be the guide along the way and develop
            at your own pace that's comfortable
          </h3>
          <h5 class="founder fw-bold">FANNIE MORENO</h5>
          <p class="second-text">/Founder & CEO</p>
        </div>
      </div>
      <!-- SECTION2  -->
      <div class="row">
        <div class="col-3 text-center px-2" v-for="el in datas">
          <h3 class="marked fs-1 fw-bolder">{{ el.val }}</h3>
          <p class="fw-bold">{{ el.name }}</p>
        </div>
      </div>
      <!-- SECTION 3 -->
      <div class="row py-5">
        <!-- LEFT SIDE -->
        <div class="col-6 d-flex">
          <div class="mb-5 pe-4">
            <CardComponentTop
              :id="this.cards[0].id"
              :image="this.cards[0].image"
              :text="this.cards[0].text"
              :title="this.cards[0].title"
              class="my-5"
            />
            <CardComponentBot
              :id="this.cards[1].id"
              :image="this.cards[1].image"
              :text="this.cards[1].text"
              :title="this.cards[1].title"
            />
          </div>
          <div class="mt-5 ps-4">
            <CardComponentTop
              :id="this.cards[2].id"
              :image="this.cards[2].image"
              :text="this.cards[2].text"
              :title="this.cards[2].title"
              class="my-5"
            />
            <CardComponentBot
              :id="this.cards[3].id"
              :image="this.cards[3].image"
              :text="this.cards[3].text"
              :title="this.cards[3].title"
            />
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="col-6 p-5 d-flex flex-column justify-content-center">
          <div class="w-75">
            <p>TOGETHER WE CAN CREATE</p>
            <h3 class="fs-1">
              Services We <span class="marked fw-normal">Can Provide</span> For
              My Clients.
            </h3>
            <ul>
              <li v-for="el in services">
                <i class="fa-solid fa-check pe-3"></i>
                {{ el.text }}
              </li>
            </ul>
            <div class="mt-4">
              <ButtonComponent :text="this.txtButton" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponentTop from "./CardComponentTop.vue";
import CardComponentBot from "./CardComponentBot.vue";
import ButtonComponent from "../../../ButtonComponent.vue";
export default {
  name: "MainFirstSection",
  components: {
    CardComponentTop,
    CardComponentBot,
    ButtonComponent,
  },
  data() {
    return {
      txtButton: "Get started for free",
      cards: [
        {
          cardId: 1,
          image: "images/home-6-service-image-01.png",
          title: "Graphic Design",
          text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",
        },
        {
          cardId: 2,
          image: "images/home-6-service-image-03.png",
          title: "Business Administration",
          text: "Learners are encouraged to study the mechanism and structure of system administration.",
        },
        {
          cardId: 3,
          image: "images/home-6-service-image-02.png",
          title: "Idea Discussion",
          text: "Get teamed up with the specialists who work and teach coding for years at famous universities.",
        },
        {
          cardId: 4,
          image: "images/home-6-service-image-04.png",
          title: "Web Development",
          text: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
        },
      ],
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
.founder {
  font-size: 1em;
}
.second-text {
  font-size: 0.9em;
}
p,
i {
  color: $color-grey;
}
.marked {
  color: $color-marker;
}
.fa-check {
  color: $color-marker;
}
</style>
