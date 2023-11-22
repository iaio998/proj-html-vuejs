<template>
  <div class="col-3 text-start py-5">
    <div>
      <p class="fs-1"><i :class="font"></i></p>
    </div>
    <h4>{{ title }}</h4>
    <p>
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

<style lang="scss" scoped></style>
