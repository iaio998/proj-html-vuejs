<template>
  <main>
    <MainFirstSection />
    <MainSecondSection />
    <MainThirdSection />
  </main>
</template>

<script>
import MainFirstSection from "./partials/ResultsAndServices/MainFirstSection.vue";
import MainSecondSection from "./partials/CoursesSection/MainSecondSection.vue";
import MainThirdSection from "./partials/ClientsSection/MainThirdSection.vue";
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
