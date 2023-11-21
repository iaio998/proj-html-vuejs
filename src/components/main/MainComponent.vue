<template>
  <main>
    <MainFirstSection />
    <MainSecondSection />
    <MainThirdSection />
  </main>
</template>

<script>
import MainFirstSection from "./partials/MainFirstSection.vue";
import MainSecondSection from "./partials/MainSecondSection.vue";
import MainThirdSection from "./partials/MainThirdSection.vue";
export default {
  name: "MainComponent",
  components: {
    MainFirstSection,
    MainSecondSection,
    MainThirdSection,
  },
};
</script>

<style lang="scss" scoped></style>
