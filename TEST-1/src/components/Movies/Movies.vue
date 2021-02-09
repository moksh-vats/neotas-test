<template>
  <div class="Movies">
    <div class="headingMovies">IMBD Movies</div>
    <custom-input :data="formData" @updateInput="handleInput" />
    <custom-button buttonText="Search By Ids" @handleButton="fetchMoviesById" />
    <div class="filter">
      <h4>Filter:</h4>
      <custom-input :data="formData1" @updateInput="handleInput" />
    </div>
    <div class="moviesView" v-for="movie in movies" :key="movie.imdbID">
      <single-movie
        :movie="movie"
        :favMovies="favMovies"
        @updateFav="handleAddToFav($event)"
      />
    </div>
  </div>
</template>

<script>
const { VUE_APP_GET_API } = process.env;
import CustomInput from "../CustomInput/CustomInput.vue";
import { axios } from "../../common";
import CustomButton from "../CustomButton/CustomButton.vue";
import SingleMovie from "../SingleMovie/SingleMovie.vue";
export default {
  components: { CustomInput, CustomButton, SingleMovie },
  name: "Movies",
  data() {
    return {
      formData: {
        label: "Movies Id",
        name: "moviesId",
        type: "text",
        placeholder: "Enter IMBD Movies Id",
      },
      moviesData: [],
      ids: [],
      favMovies: [],
      formData1: {
        name: "movieSearch",
        type: "text",
        placeholder: "Search Movies ",
      },
    };
  },
  computed: {
    movies() {
      return this.moviesData;
    },
  },
  methods: {
    async handleInput({ name, inputValue }) {
      if (name == "moviesId") {
        this.ids = inputValue.split(",");
      } else if (name == "movieSearch") {
        if (inputValue.length > 1) {
          this.moviesData = this.moviesData.filter((n) =>
            n.Title.startsWith(inputValue)
          );
        }
      }
    },
    async fetchMoviesById() {
      this.moviesData = [];
      for (const id of this.ids) {
        const { data } = await axios.get(`${VUE_APP_GET_API}i=${id}`);
        this.moviesData.push(data);
      }
    },
    handleAddToFav(imdbRating) {
      if (!this.favMovies.includes(imdbRating)) {
        this.favMovies.push(imdbRating);
      } else {
        this.favMovies.splice(this.favMovies.indexOf(imdbRating), 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div[class="Movies"] {
  padding: 3em 0;
  text-align: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  div[class="headingMovies"] {
    text-align: center;
    font-size: 2em;
    font-weight: 700;
  }
  div[class="filter"] {
    margin: 2em 0;
  }
}
</style>
