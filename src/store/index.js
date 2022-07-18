import axios from "axios";
import Vuex from "vuex";
import { public_key, hashValue } from "../marvel";

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    getCharacters(state) {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hashValue}&limit=100&offset=0`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            state.characters.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {
    getCharacters: (context) => {
      context.commit("getCharacters");
    },
  },
  modules: {},
  getters: {},
});
