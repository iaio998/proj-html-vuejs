<template>
  <div class="row justify-content-between align-items-center">
    <div class="col">
      <h1>
        <div class="img-cont">
          <img src="/images/light-logo.png" alt="Logo" />
        </div>
      </h1>
    </div>
    <div class="col">
      <div class="d-flex justify-content-end align-items-center">
        <ul class="d-flex px-2">
          <li class="px-1" v-for="el in menu">{{ el.name }}</li>
        </ul>
        <ul class="d-flex px-2">
          <li class="px-1" v-for="el in fontAwesome">
            <div><i :class="el.class"></i></div>
          </li>
        </ul>
        <div class="d-flex">
          <div class="input-group mx-2">
            <input
              placeholder="Search..."
              type="text"
              class="form-control rounded-1 p-0"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button type="button" class="btn btn-primary rounded-2 fs-bold">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      menu: [
        {
          name: "Home",
          menuId: 1,
        },
        {
          name: "Pages",
          menuId: 2,
        },
        {
          name: "Courses",
          menuId: 3,
        },
        {
          name: "Features",
          menuId: 4,
        },
        {
          name: "Blog",
          menuId: 5,
        },
        {
          name: "Shop",
          menuId: 6,
        },
      ],
      fontAwesome: [
        {
          name: "shop",
          class: "fa-solid fa-cart-shopping",
          fAwesomeId: 1,
        },
        {
          name: "profile",
          class: "fa-regular fa-user",
          fAwesomeId: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.img-cont {
  width: 150px;
  img {
    width: 100%;
  }
}
</style>
