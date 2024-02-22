<template>
  <div class="text-start">
    <h5 class="py-2">Address</h5>
    <!-- ADDRESSES -->
    <ul>
      <li class="py-2" v-for="el in this.datas">
        <a href="#">{{ el.text }} </a>
      </li>
    </ul>
    <!-- HYPERLINKS -->
    <ul class="d-flex py-3">
      <li class="pe-3 fs-4" v-for="el in socials">
        <a class="hyperlink" href="#">
          <i :class="el.fontAwesome"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddressComponent",
  data() {
    return {
      datas: [
        {
          dataId: 1,
          name: "Address",
          text: "382 NE 191st St # 87394 Miami, FL 33179-3899",
        },
        {
          dataId: 2,
          name: "Contact",
          text: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
        },
        {
          dataId: 3,
          name: "Email",
          text: "support@maxcoach.com",
        },
      ],
      socials: [
        {
          socialId: 1,
          name: "Facebook",
          fontAwesome: "fa-brands fa-square-facebook",
        },
        {
          socialId: 2,
          name: "X",
          fontAwesome: "fa-brands fa-square-x-twitter",
        },
        {
          socialId: 3,
          name: "Instagram",
          fontAwesome: "fa-brands fa-instagram",
        },
        {
          socialId: 4,
          name: "Linkedin",
          fontAwesome: "fa-brands fa-linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/style/partials/variables" as *;
.hyperlink {
  color: $color-socials-hyperlink;
}
</style>
