import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    cardMovieList: [], //array dei film
    cardSerieTvList: [], //array delle serie tv
    searchText: "", //ricerca testo
});

export function fetchMovie() {
    const url = "https://api.themoviedb.org/3/search/movie" //url film

    axios.get(url, {
        params: {
        api_key: "153a453e7bf56711c22aa4df11cee46e", //la mia chiave
        query: store.searchText,
        }
}).then((response) => {
    store.cardMovieList = response.data.results;
});

    //dentro questa funzione includo anche api delle serie tv
    const urlSerie = "https://api.themoviedb.org/3/search/tv" //url serie tv

    axios.get(urlSerie, {
        params: {
            api_key: "153a453e7bf56711c22aa4df11cee46e", //la mia chiave
            query: store.searchText,
        }
    }).then((response) => {
    store.cardSerieTvList = response.data.results;
});
};

//funzione del voto su 5 stelle
export function votingStars(vote) {
    const number = parseFloat(vote); //stringa in numero
    const total = number / 2; //divido in 2 perchè il voto iniziale è 10
    const star = 5; // le stelle
    const starPercentage = (total / star) * 100; //trasformo in percentuale
    const starRounded = `${(Math.round(starPercentage / 10) * 10)}%`; //arrotondo per eccesso

    return starRounded 
}
