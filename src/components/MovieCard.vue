<script setup>
import { RouterLink } from 'vue-router';
import ImgNoFound from '../assets/imgNotFound.png'
import PlayIcon from '../icons/PlayIcon.vue'
import { inject } from 'vue';
const props = defineProps({
  movie: Object,
  type:{type:String,required:true},
})

const { dateToYearConvert } = inject('formaters');
</script>

<template>
    <div class="group relative w-full h-full rounded-xl overflow-hidden">
        <img v-if="!movie.poster_path" :src="ImgNoFound" :alt="movie.title" class="group-hover:scale-[1.1] aspect-[2/3] transition-all duration-600 w-full h-full" />
        <img v-else  :src="`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`" :alt="movie.title" class="group-hover:scale-[1.1] aspect-[2/3] transition-all duration-600 w-full h-full" />
        <div class="absolute z-10 p-3 bg-black/50 hidden group-hover:flex top-0 w-full h-full">
            <RouterLink :to="`/movie/${movie.id}`" class="flex w-full justify-center items-center">
                <div>
                    <div class="flex justify-center mb-3">
                        <span class="bg-blue-600 text-slate-100 p-2 w-10 h-10 flex items-center justify-center rounded-full text-center">
                            <PlayIcon class="w-5 h-5"/>
                        </span>
                    </div>
                    <h2 class="text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-lg font-bold text-white/90 text-center">{{ movie.title }}</h2>
                    <p class="text-sm font-semibold text-gray-600 text-white/70 text-center">{{ dateToYearConvert(movie.release_date) }}</p>
                </div>
            </RouterLink>
        </div>  
    </div>
</template>