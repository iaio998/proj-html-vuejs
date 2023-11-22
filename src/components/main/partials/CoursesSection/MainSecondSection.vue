<template>
  <div class="external py-5">
    <div class="container text-center py-5">
      <p>CHOOSE A COURSE TO GET STARTED</p>
      <h3 class="fs-1 fw-bold">
        Latest Featured <span class="marked fw-normal">Courses</span>
      </h3>
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
      <div class="mt-4">
        <ButtonComponent :text="this.txtButton" :class="this.txtButton2" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseComponent from "./CourseComponent.vue";
import ButtonComponent from "../../../ButtonComponent.vue";
import { store } from "../../../../data/store";
export default {
  name: "MainSecondSection",
  components: {
    CourseComponent,
    ButtonComponent,
  },
  data() {
    return {
      txtButton: "View all courses",
      txtButton2: "fa-solid fa-arrow-right ps-2",
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.marked {
  color: $color-marker;
}
p {
  color: $color-grey;
}
.external {
  background-color: $color-white-secondary;
}
</style>
