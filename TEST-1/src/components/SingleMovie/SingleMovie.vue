<template>
  <div class="singleMovie">
    <div class="poster">
      <img :src="movie.Poster" class="poster" :alt="movie.Title" />
    </div>
    <div class="movieData">
      <h3>
        <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">{{
          movie.Title
        }}</router-link>
      </h3>
      <p class="genreRuntime">
        <span class="runtime">{{ movie.Runtime }}</span>
        <span class="ghost">|</span>
        <span class="genre"> {{ movie.Genre }} </span>
      </p>
      <p class="ratings">
        <i class="fa fa-star"></i>
        <strong>{{ movie.imdbRating }}</strong>
        <span class="ghost" v-if="!id">|</span>
        <i
          :class="
            favMovies.includes(movie.imdbID)
              ? 'fa fa-star'
              : 'fa fa-star grayed'
          "
          v-if="!id"
        ></i>
        <span
          v-if="!id"
          class="addToFav"
          @click="$emit('updateFav', movie.imdbID)"
          >Add To Fav</span
        >
      </p>
      <p class="storyLine">
        {{ movie.Plot }}
      </p>
      <p class="genreRuntime">Stars: {{ movie.Actors }}</p>
      <p class="genreRuntime">Votes: {{ movie.imdbVotes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "favMovies", "id"],
};
</script>

<style lang="scss" scoped>
div[class="singleMovie"] {
  margin: 3em 8em;
  display: flex;
  // justify-content: center;
  div[class="movieData"] {
    padding: 1em;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 24px;
      font-weight: normal;
    }
    a {
      color: #136cb2;
      text-decoration: none;
    }
    p[class="genreRuntime"] {
      color: #666;
      font-size: 0.9em;
      margin: 1em 0;
    }
    p[class="ratings"] {
      font-size: 1.3em;
      span[class="ghost"] {
        margin: 0 1em;
      }
      i[class="fa fa-star"] {
        color: #ffd700;
        margin: 0 0.4em;
      }
      span[class="addToFav"] {
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      i[class="fa fa-star grayed"] {
        margin: 0 0.4em;
      }
    }
    p[class="storyLine"] {
      margin: 1em;
    }
  }
}
</style>
