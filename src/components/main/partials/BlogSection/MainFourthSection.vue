<template>
  <div class="external">
    <div class="container text-center py-5">
      <p>ENJOY READING ON MAXCOACH</p>
      <h3>Latest On <span>Our Blogs</span></h3>
      <div class="row px-5 py-5">
        <CardComponent
          v-for="el in datas"
          :image="el.image"
          :date="el.date"
          :views="el.views"
          :text="el.text"
          :genre="el.genre"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "MainFourthSection",
  components: { CardComponent },
  data() {
    return {
      datas: [
        {
          image: "images/artist-blog-03-480x325.jpeg",
          date: "May 15, 2020",
          views: 688,
          text: "Brush Strokes Energize Trees in Paintings",
          genre: "ARTIST",
          datasId: 1,
        },
        {
          image: "images/artist-blog-01-480x325.jpg",
          date: "May 15, 2020",
          views: 603,
          text: "Pocket-Sized Notebooks Hold Miniature Paintings",
          genre: "ARTIST",
          datasId: 2,
        },
        {
          image: "images/artist-blog-02-480x325.jpg",
          date: "May 15, 2020",
          views: 397,
          text: "Connection Between Self-Portraits and Identity",
          genre: "ARTIST",
          datasId: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/style/partials/variables" as *;
.external {
  background-color: $color-white-secondary;
}
</style>
