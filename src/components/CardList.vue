<script>
import LangFlag from 'vue-lang-code-flags';
import { store, votingStars } from '../store';

export default {
    components: {
        LangFlag,
    },
    data() {
        return {
        store, //importo store nel data
        }
    },
    methods: {
        votingStars,
    },
}
</script>


<template>

    <div class="container d-flex mt-5 mb-5">
        <div class="row row-cols-6 g-3 gap-2 justify-content-center">
            <!-- ciclo for per le card -->
            <div class="rounded-0 border-0 pt-1" 
                v-for="movie in store.cardMovieList" 
                :key="movie.id">

                <!-- FILM -->

                <div class="card">
                    <!-- immagine film -->
                    <img :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`">
                    <!-- testo film-->
                    <div>
                        <div class="text-center"><strong>Titolo Film: </strong>{{ movie.title }}</div>
                        <div class="text-center"><strong>Titolo originale: </strong> {{ movie.original_title }} </div>
                        <div class="text-center"><strong>Lingua: </strong><lang-flag :iso="movie.original_language"/></div>
                        <!-- stelle -->
                        <div class="text-center">
                            <span><strong>Voto: </strong></span>
                            <div class="stars-outer">
                                <div class="stars-inner" :style="`width: ${votingStars(movie.vote_average)}`"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="rounded-0 border-0 pt-1" 
                v-for="serie in store.cardSerieTvList" 
                :key="serie.id">

                <!-- SERIE TV -->

                <div class="card">
                    <!-- immagine film -->
                    <img :src="`http://image.tmdb.org/t/p/w500/${serie.poster_path}`">
                    <!-- testo film-->
                    <div>
                        <div class="text-center"><strong>Titolo Serie TV: </strong>{{ serie.title }}</div>
                        <div class="text-center"><strong>Titolo originale: </strong> {{ serie.original_title }} </div>
                        <div class="text-center"><strong>Lingua: </strong><lang-flag :iso="serie.original_language"/></div>
                        <!-- stelle -->
                        <div class="text-center">
                            <span><strong>Voto: </strong></span>
                            <div class="stars-outer">
                                <div class="stars-inner" :style="`width: ${votingStars(serie.vote_average)}`"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 450px;
}
img {
    height: 300px;
    }
.stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
}

.stars-outer::before {
    content: "\f006 \f006 \f006 \f006 \f006";
}

.stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
}

.stars-inner::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: #f8ce0b;
}

</style>