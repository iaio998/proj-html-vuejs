<template>
  <div class="text-start">
    <h5 class="py-2">Information</h5>
    <ul>
      <li class="py-2" v-for="el in this.information">
        <a href="#">{{ el.text }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InformationComponent",
  data() {
    return {
      information: [
        {
          infoId: 1,
          text: "Membership",
        },
        {
          infoId: 2,
          text: "Purchase guide",
        },
        {
          infoId: 3,
          text: "Privacy policy",
        },
        {
          infoId: 4,
          text: "Terms of services",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
