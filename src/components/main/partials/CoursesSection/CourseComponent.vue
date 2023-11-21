<template>
  <div class="d-flex align-items-center gap-4">
    <div class="img-cont">
      <img :src="image" :alt="title" />
    </div>
    <div class="text-start">
      <h3>{{ price }}</h3>
      <p>{{ title }}</p>
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
.img-cont {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
