<template>
  <div class="col-3 text-start py-5">
    <div>
      <div class="fs-1 py-3"><i :class="font"></i></div>
    </div>
    <h4 class="fw-bold">{{ title }}</h4>
    <p class="fw-semibold">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CardHelpYou",
  props: {
    font: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
p {
  color: $color-grey;
}
</style>
