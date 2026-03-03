<script setup>
import { inject } from 'vue'
import PlaySolid from '../icons/PlaySolid.vue';
import Sun from '../icons/Sun.vue';
import Moon from '../icons/Moon.vue';
import { RouterLink } from 'vue-router';

const { isDark,toggleDarkMode } = inject('theme')
const { textBusqueda,searchMovie } = inject('movie')
</script>
<template>
    <header class="fixed z-20 top-0 bg-slate-200/95 dark:bg-slate-950/95 border-b border-slate-400 dark:border-slate-800 w-full z-10 flex justify-center py-3 px-3 lg:px-0 transition-all duration-400">
        <nav class="max-w-6xl flex justify-between items-center w-full">
            <RouterLink to="/" class="text-salte-900 dark:text-slate-100 font-bold text-xl flex items-center gap-2 transition-all duration-400"><PlaySolid class="w-10 h-10 text-blue-600"/>CineVue</RouterLink>
            <div class="flex item-center gap-4">
                <input class="focus:outline focus:outline-blue-400 focus:dark:outline-blue-600 text-slate-900 dark:text-slate-300 rounded-lg bg-slate-700/10 dark:bg-slate-800/90 px-4 py-3 w-full transition-all duration-400" type="text" v-model="textBusqueda" @keyup.enter="searchMovie" placeholder="Escribe una película (ej: Batman)" />
                <button class="p-3 dark:bg-white/10 rounded-lg text-slate-700 dark:text-white border border-slate-400 dark:border-white/20 hover:bg-slate-400/20 hover:dark:bg-salate-200/15 transition-all duration-400" @click="toggleDarkMode()">
                    <Sun v-if="!isDark" :class="`w-5 h-5`"/>
                    <Moon v-else :class="`w-5 h-5`"/>
                </button>
            </div>
            
        </nav>
    </header>
</template>