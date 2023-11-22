<template>
  <div class="text-start">
    <h5 class="py-2">Explore</h5>
    <div class="d-flex gap-5">
      <ul>
        <li class="py-2" v-for="el in this.exploreLeft">
          <a href="#">{{ el.text }} </a>
        </li>
      </ul>
      <ul>
        <li class="py-2" v-for="el in this.exploreRight">
          <a href="#">{{ el.text }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreComponent",
  data() {
    return {
      exploreLeft: [
        {
          xploreLeftId: 1,
          text: "Start here",
        },
        {
          xploreLeftId: 2,
          text: "Blog",
        },
        {
          xploreLeftId: 3,
          text: "About us",
        },
      ],
      exploreRight: [
        {
          xploreRightId: 1,
          text: "Success story",
        },
        {
          xploreRightId: 2,
          text: "Courses",
        },
        {
          xploreRightId: 3,
          text: "Contact us",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
