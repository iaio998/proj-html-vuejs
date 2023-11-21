<template>
  <div class="row justify-content-between align-items-center">
    <div class="col">
      <h1 class="">
        <img src="/images/light-logo.png" alt="Logo" />
      </h1>
    </div>
    <div class="col">
      <div class="d-flex align-items-center">
        <ul class="d-flex px-2">
          <li>1</li>
          <li>2</li>
        </ul>
        <ul class="d-flex px-2">
          <li>1</li>
          <li>2</li>
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
        },
        {
          name: "Pages",
        },
        {
          name: "Courses",
        },
        {
          name: "Features",
        },
        {
          name: "Blog",
        },
        {
          name: "Shop",
        },
        {
          class: "fa-regular fa-user",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
