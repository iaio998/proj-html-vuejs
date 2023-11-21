<template>
  <main>
    <MainFirstSection />
    <MainSecondSection />
  </main>
</template>

<script>
import MainFirstSection from "./partials/MainFirstSection.vue";
import MainSecondSection from "./partials/MainSecondSection.vue";
export default {
  name: "MainComponent",
  components: {
    MainFirstSection,
    MainSecondSection,
  },
};
</script>

<style lang="scss" scoped></style>
