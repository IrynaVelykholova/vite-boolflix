<script>
import { store, fetchMovie } from "../store";

export default {
    data() {
        return {
            store, //importo il mio store nel data
        }
    },
    methods: {
        fetchMovie, //importo funzione dello store
    }
}
</script>


<template>

    <nav class="navbar">
        <div class="container-fluid d-flex">
            <h1 class="text-color ms-3">BOOLFLIX</h1>

            <div class="input-group me-3 size">
                <!-- collego dallo store al tasto invio-->
                <input type="text" class="form-control" placeholder="Cerca titolo" 
                    v-model="store.searchText" 
                    @keyup.enter="fetchMovie">

                <!-- collego anche il bottone al click -->
                <button class="input-group-text btn btn-light border" 
                    @click="fetchMovie">
                    <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </nav>

</template>


<style lang="scss" scoped>
.navbar {
    background-color: black;
    .text-color {
        color: red;
    }
    .input-group {
        width: 300px;
    }
    .fa-solid {
        color: black;
    }
}
</style>