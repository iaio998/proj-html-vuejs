<template>
  <main>
    <MainFirstSection />
    <MainSecondSection />
    <MainThirdSection />
    <MainFourthSection />
    <MainFifthSection />
    <MainGetStarted />
  </main>
</template>

<script>
import MainFirstSection from "./partials/ResultsAndServices/MainFirstSection.vue";
import MainSecondSection from "./partials/CoursesSection/MainSecondSection.vue";
import MainThirdSection from "./partials/ClientsSection/MainThirdSection.vue";
import MainFourthSection from "./partials/BlogSection/MainFourthSection.vue";
import MainFifthSection from "./partials/HelpYouSection/MainFifthSection.vue";
import MainGetStarted from "./partials/GetStartedSection/MainGetStarted.vue";
export default {
  name: "MainComponent",
  components: {
    MainFirstSection,
    MainSecondSection,
    MainThirdSection,
    MainFourthSection,
    MainFifthSection,
    MainGetStarted,
  },
};
</script>

<style lang="scss" scoped></style>
