<template>
  <header>
    <!-- NAVBAR -->
    <div>
      <nav class="container py-4 px-5">
        <NavbarComponent />
      </nav>
    </div>
    <!-- JUMBOTRON -->
    <div class="jumbotron container text-center py-2">
      <h2 class="fw-bold">Learn At Your Own Pace!</h2>
      <p class="m-0 py-2 fw-bold">
        Get teamed up with people of the same will.
      </p>
      <!-- BUTTON -->
      <div class="mt-4">
        <button>{{ this.txtButton }}</button>
      </div>
      <!-- IMAGES -->
      <div class="position-relative">
        <img
          id="img-left"
          class="position-absolute"
          src="images/home-6-hero-left-person.png"
          alt=""
        />
        <div class="img-cont d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
          <img src="/images-2/video-screen.png" alt="" />
        </div>
        <img
          id="img-right"
          class="position-absolute"
          src="images/home-6-hero-right-person.png"
          alt=""
        />
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
  data() {
    return {
      txtButton: "Get started for free",
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
header {
  color: $color-white;
  background-color: $color-blue;
  // background-image: url("images-2/jumbotron-background-wave-big.svg");
  // background-image: url("images-2/jumbotron-background-wave-medium.svg");
  // background-image: url("images-2/jumbotron-background-wave-small.svg");
  h2 {
    font-size: 3em;
  }
  p {
    color: $color-grey-secondary;
  }
  #img-left {
    bottom: -110px;
    left: -110px;
  }
  #img-right {
    bottom: -150px;
    right: 15px;
  }
  .img-cont {
    width: 800px;
    margin: 0 auto;
    border: 20px solid $color-white;
    transform: translate(0, 130px);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.185);
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
      transition: 1.5s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  button {
    font-weight: bold;
    color: white;
    background-color: $color-marker;
    border: 0;
    box-shadow: 0;
    padding: 15px 40px;
    border-radius: 8px;
    transition: 0.25s ease;
    &:hover {
      color: $color-marker;
      background-color: white;
    }
  }
}
</style>
