<template>
  <div class="col-4 p-0">
    <div class="card border-0" style="width: 18rem">
      <div class="overflow-hidden">
        <img :src="image" class="card-img-top" :alt="text" />
      </div>
      <div class="card-body text-start">
        <p>{{ genre }}</p>
        <h5 class="pb-2">{{ text }}</h5>
        <ul class="d-flex gap-3">
          <li><i class="fa-regular fa-calendar"></i> {{ date }}</li>
          <li><i class="fa-regular fa-eye"></i> {{ views }}</li>
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

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.card {
  p {
    font-size: 0.7em;
    font-weight: bold;
    margin: 0;
    color: $color-grey;
  }
  h5 {
    color: $color-black-secondary;
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: $color-marker;
    }
  }
  li {
    color: $color-grey;
    font-size: 0.9em;
  }
  img {
    transition: 1.5s ease;
  }
  &:hover img {
    cursor: pointer;
    transform: scale(1.2);
  }
}
</style>
