<template>
  <div class="card" style="width: 18rem">
    <div class="img-cont">
      <img :src="image" class="card-img-top" :alt="title" />
    </div>
    <div class="card-body">
      <h5>{{ title }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponentBot",
  props: {
    image: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 0;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.356);
}
.img-cont {
  width: 200px;
  height: 222px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
