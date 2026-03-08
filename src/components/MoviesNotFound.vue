<script setup>
import { inject } from "vue";
import MovieNotFoundDark from "../assets/img/movies-not-found-dark.png";
import MovieNotFoundLight from "../assets/img/movies-not-found-light.png";

const { isDark } = inject('theme');
</script>
<template>
    <div  class="h-screen flex justify-center w-full">
        <div class="flex flex-col items-start">
            <div class="max-w-xl">
                <img v-if="isDark" :src="MovieNotFoundDark" alt="Movie not found" class="w-[100%]" />
                <img v-else :src="MovieNotFoundLight" alt="Movie not found" class="w-[100%]" />
                <div class="flex flex-col gap-1 mt-[-20%] gap-3">
                    <h1 class="text-center text-slate-900 dark:text-slate-100 text-[8vw] md:text-4xl font-bold transition-all duration-400">Movie not found</h1>
                    <p class="text-center text-slate-500 dark:text-slate-400 text-[4vw] md:text-xl font-medium transition-all duration-400">
                        We couldn't find any results matching your search. Try
                        again with different keywords or check your filters.
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>