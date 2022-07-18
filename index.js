// import { public_key, hashValue } from "../marvel";
import axios from "axios";
import { defineStore } from "pinia";
import { public_key, hashValue } from "@/marvel";

export const useCharactersStore = defineStore({
  id: "characters",
  state: () => ({
    characters: [],
    loading: false,
  }),
  actions: {
    async getCharacters() {
      this.$state.loading = true;
      await axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hashValue}&limit=20&offset=0`
        )
        .then((result) => {
          console.log(result);
          result.data.data.results.forEach((item) => {
            this.characters.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });
      this.$state.loading = false;
    },
  },
  getters: {},
});
