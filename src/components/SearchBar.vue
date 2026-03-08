<script setup>
import { inject } from 'vue';
import { getYears } from '../composables/getYears';

const {ascOrder} = getYears();
const { textBusqueda,searchMovie,yearBusqueda } = inject('movie');
</script>

<template>
    <section class="flex justify-center">
        <div class="max-w-6xl px-4 xl:px-0 w-full">
            <div class="relative">
                <div class="flex z-10 flex-wrap md:flex-nowrap absolute w-full lg:mt-[-3%] gap-2 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 transition-all duration-400">
                    <input class="text-slate-900 dark:text-slate-300 rounded-lg bg-slate-700/10 dark:bg-slate-800/90 focus:outline focus:outline-blue-400 focus:dark:outline-blue-600 px-4 py-3 w-full transition-all duration-400" type="text" v-model="textBusqueda" @keyup.enter="searchMovie" placeholder="Escribe una película (ej: Batman)" />
                    
                    <select v-model="yearBusqueda" aria-label="filter by year" class="px-4 py-3 w-full md:w-[40%]  transition-all duration-400 text-slate-900 dark:text-slate-300 bg-slate-300 dark:bg-slate-800/90 rounded-lg font-semibold">
                        <option value="">Selecciona un Año</option>
                        <option v-for="(year,index) in ascOrder" :key="index" :value="year" >{{ year }}</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>