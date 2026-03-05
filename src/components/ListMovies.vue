<script setup>
import { inject } from 'vue';
import MovieCard from './MovieCard.vue';
import MoviesNotFound from './MoviesNotFound.vue';
import Button from './ui/Button.vue';
import ListSkeleton from './ui/skeleton/ListSkeleton.vue';

const { movies, loading, searchMovie,textBusqueda,yearBusqueda } = inject('movie');


</script>

<template>
    <section class="flex justify-center">
        <div class="max-w-6xl w-full px-4 xl:px-0 py-40 md:py-30">
            <h1 v-if="movies.length > 0" class="text-3xl md:mt-0 text-slate-900 dark:text-slate-100 font-bold mb-10">
                {{ textBusqueda == '' && yearBusqueda == '' ? 'Películas Populares' : 'Resultados de tu Busqueda' }}
            </h1>
            <ListSkeleton v-if="loading" :section="'listMovies'" />
            <div v-else-if="movies && !loading" :class="movies.length > 0 ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10' : ''">
                <div v-for="movie in movies" :key="movie.id">
                    <MovieCard :movie="movie" :type="'movie'" :loading="loading"/>
                </div>
                <MoviesNotFound v-if="movies.length == 0"/>
            </div>
            <div v-if="movies.length > 0" class="flex justify-center mt-10">
                <Button :typeBtn="'function'" @click="searchMovie(false)" :disabled="loading" ariaLabel="load more movies" :widthBtn="'w-1/2'">
                    {{ loading ? 'Cargando...' : 'Cargar más' }}
                </Button>
            </div>
        </div>
    </section>  
</template>