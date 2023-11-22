<template>
  <button>{{ text }} <i :class="class"></i></button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: String,
    class: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

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
    background-color: $color-purple;
  }
}
</style>
