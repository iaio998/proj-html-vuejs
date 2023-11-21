<template>
  <div class="external">
    <div class="container text-center py-5">
      <p>CHOOSE A COURSE TO GET STARTED</p>
      <h3>Latest Featured <span>Courses</span></h3>
      <div class="row g-5 py-5">
        <div v-for="el in store.courses" class="col-6">
          <CourseComponent
            :image="el.image"
            :price="el.price"
            :title="el.title"
            :lessNum="el.numberLessons"
            :studNum="el.numberStudents"
          />
        </div>
      </div>
      <button type="button" class="btn btn-primary rounded-2 fs-bold">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import CourseComponent from "./CourseComponent.vue";
import { store } from "../../../data/store";
export default {
  name: "MainSecondSection",
  components: {
    CourseComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/style/partials/variables" as *;
.external {
  background-color: $color-white-secondary;
}
</style>
