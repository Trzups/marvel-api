<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="character in characters" :key="character">
        <div class="card h-100">
          <img
            :src="character.thumbnail.path + '/standard_large.jpg'"
            class="card-img-bottom"
            alt="image not avaible"
          />
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">
              {{ character.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Hero",

  mounted() {
    this.$store.dispatch("getCharacters");
  },
  computed: {
    ...mapState({ characters: (state) => state.characters }),
  },
};
</script>

<style></style>
