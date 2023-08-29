<script>
import LangFlag from 'vue-lang-code-flags';
import { store } from '../store';

export default {
    components: {
        LangFlag,
    },
    data() {
        return {
        store, //importo store nel data
        }
    }
}
</script>


<template>

    <div class="container d-flex mt-5 mb-5">
        <div class="row row-cols-6 g-3 gap-2 justify-content-center">
            <!-- ciclo for per le card -->
            <div class="card rounded-0 border-0 pt-1" 
                v-for="card in store.cardList" 
                :key="card.id">
                <!-- immagine -->
                <img :src="`http://image.tmdb.org/t/p/w500/${card.poster_path}`" class="h-100">
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>


</style>