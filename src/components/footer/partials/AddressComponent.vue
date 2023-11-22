<template>
  <div class="text-start">
    <h5>Address</h5>
    <p>{{ this.address }}</p>
    <p>{{ this.contact }}</p>
    <p>
      <a href="#">{{ this.email }}</a>
    </p>
    <ul class="d-flex">
      <li class="pe-4 fs-4" v-for="el in socials">
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
      address: "382 NE 191st St # 87394 Miami, FL 33179-3899",
      contact: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
      email: "support@maxcoach.com",
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
