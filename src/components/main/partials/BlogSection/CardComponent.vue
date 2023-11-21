<template>
  <div class="col-4 p-0">
    <div class="card border-0" style="width: 18rem">
      <img :src="image" class="card-img-top" :alt="text" />
      <div class="card-body text-start">
        <p>{{ genre }}</p>
        <h5>{{ text }}</h5>
        <ul class="d-flex gap-3">
          <li><i class="fa-regular fa-calendar pe-2"></i> {{ date }}</li>
          <li><i class="fa-regular fa-eye pe-2"></i> {{ views }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: String,
    date: String,
    views: Number,
    text: String,
    genre: String,
  },
};
</script>

<style lang="scss" scoped></style>
