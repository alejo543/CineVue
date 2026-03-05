<script setup>
import { inject, onMounted } from 'vue';
import Hero from '../components/Hero.vue';
import ListMovies from '../components/ListMovies.vue';
import SearchBar from '../components/SearchBar.vue';
import { useSeo } from '../composables/useSeo';

useSeo({
    title:'CineVue - Tu Catálogo de Películas Favorito',
    description:'Explora las últimas tendencias del cine, consulta detalles técnicos, repartos y trailers'
},'page')

const { searchMovie, moviesHero } = inject('movie');

onMounted(() => {
    moviesHero();
    searchMovie();
});

</script>

<template>
    <Hero/>
    <SearchBar/>
    <ListMovies/>
</template>