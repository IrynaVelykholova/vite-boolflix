import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    cardList: [], //array dei film
    searchText: "", //ricerca testo
});

export function fetchMovie() {
    const url = "https://api.themoviedb.org/3/search/movie" //url api

    axios.get(url, {
        params: {
        api_key: "153a453e7bf56711c22aa4df11cee46e", //la mia chiave
        query: store.searchText,
        }
}).then((response) => {
    store.cardList = response.data.results;
});
}