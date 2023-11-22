<template>
  <div class="external d-flex align-items-center p-3 gap-4">
    <div class="img-cont">
      <img :src="image" :alt="title" />
    </div>
    <div class="text-start">
      <h3 class="marked fw-bold">{{ price }}</h3>
      <h4 class="w-75 fw-bold py-2">{{ title }}</h4>
      <div class="d-flex">
        <p class="pe-3">
          <i class="fa-regular fa-file-lines pe-2"></i> {{ lessNum }} lessons
        </p>
        <p class="ps-3">
          <i class="fa-regular fa-user pe-2"></i> {{ studNum }} students
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseComponent",
  props: {
    image: String,
    price: String,
    title: String,
    lessNum: Number,
    studNum: Number,
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.external {
  border-radius: 10px;
  transition: 0.4s ease;
  .marked {
    color: $color-marker;
  }
  h4 {
    color: $color-purple;
    font-size: 1.3em;
    transition: 0.4s ease;
    &:hover {
      color: $color-marker;
      cursor: pointer;
    }
  }
  p {
    color: $color-grey;
  }
  .img-cont {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &:hover {
    background-color: white;
  }
}
</style>
