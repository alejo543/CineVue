<script setup>
import { useModalProvider } from './composables/useModal';
import { onMounted, provide, ref, watch } from 'vue';
import { useDarkMode } from './composables/useDarkMode';
import { useMovies } from './composables/useMovies';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import Modal from './components/Modal.vue';
import { useFormaters } from './composables/useFormaters';
const {isDark,toggleDarkMode,initTheme} =useDarkMode();

const {textBusqueda,movies,loading,searchMovie,moviesInHero,moviesHero,loadingHero} = useMovies();
const {timeMovieConvert,dateToYearConvert,rateConvert,moneyConvert} = useFormaters();

onMounted(()=>{
  initTheme();
  searchMovie();
  moviesHero();
})

provide('theme', {isDark,toggleDarkMode});
provide('movie', {textBusqueda,movies,loading,searchMovie,moviesInHero,loadingHero});
provide('formaters',{timeMovieConvert,dateToYearConvert,rateConvert,moneyConvert});

useModalProvider();
</script>

<template>
  <div class="bg-slate-200 dark:bg-slate-950 transition-all relative duration-400">
      <Navbar/>
      <main>
        <RouterView />
        <Modal />
      </main>
  </div>
</template>
