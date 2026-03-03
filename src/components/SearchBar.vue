<script setup>
import { inject } from 'vue';

const { textBusqueda,searchMovie } = inject('movie')
</script>

<template>
    <section class="flex justify-center">
        <div class="max-w-6xl px-4 lg:px-0 w-full">
            <div class="relative">
                <div class="flex z-10 absolute w-full lg:mt-[-3%] gap-2 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 transition-all duration-400">
                    <input class="text-slate-900 dark:text-slate-300 rounded-lg bg-slate-700/10 dark:bg-slate-800/90 focus:outline focus:outline-blue-400 focus:dark:outline-blue-600 px-4 py-3 w-full transition-all duration-400" type="text" v-model="textBusqueda" @keyup.enter="searchMovie" placeholder="Escribe una película (ej: Batman)" />
                </div>
            </div>
        </div>
    </section>
</template>