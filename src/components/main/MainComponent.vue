<template>
  <main>
    <MainFirstSection />
    <MainSecondSection />
    <MainThirdSection />
    <MainFourthSection />
  </main>
</template>

<script>
import MainFirstSection from "./partials/ResultsAndServices/MainFirstSection.vue";
import MainSecondSection from "./partials/CoursesSection/MainSecondSection.vue";
import MainThirdSection from "./partials/ClientsSection/MainThirdSection.vue";
import MainFourthSection from "./partials/BlogSection/MainFourthSection.vue";
export default {
  name: "MainComponent",
  components: {
    MainFirstSection,
    MainSecondSection,
    MainThirdSection,
    MainFourthSection,
  },
};
</script>

<style lang="scss" scoped></style>
