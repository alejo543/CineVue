<script setup>
import { inject, ref, watch } from 'vue'
// Import Swiper Vue.js components
import {Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import PlayIcon from '../icons/PlayIcon.vue';
import Button from './ui/Button.vue';
import Skeleton from './ui/skeleton/ListSkeleton.vue';
import HeroSkeleton from './ui/skeleton/HeroSkeleton.vue';
import TextSkeleton from './ui/skeleton/TextSkeleton.vue';

const modules = [Autoplay,EffectFade,Navigation, Pagination];

const { moviesInHero,loadingHero } = inject('movie-hero')

const isSwiperEnabled =  ref(loadingHero)

</script>
<template>
    <section :class="`flex justify-center ${loadingHero ? 'animate-pulse' : ''} `">
        <div class="w-full relative h-200 md:h-auto pt-[71px] ">
            <swiper :enabled="isSwiperEnabled"
            :slides-per-view="1"
            :space-between="50"
           
            :autoplay="{
                delay: 6500,
                disableOnInteraction: false,
            }"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="w-full h-full"
            
            >
                <SwiperSlide v-for="movie in moviesInHero" :key="movie.id" class="relative mask-radial-at-top mask-radial-from-100%" >
                    <div class="mask-l-from-0% mask-b-from-10% mask-l-to-90% text-slate-100 h-full transition-all duration-400">
                        <HeroSkeleton v-if="loadingHero"/>
                        <img v-else-if="!loadingHero && movie.backdrop_path" :src="`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`" :alt="movie.title" class="object-cover h-full md:h-auto md:w-full" />
                        <img v-else-if="!loadingHero && !movie.backdrop_path" :src="`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(blur)/${movie.poster_path}`" :alt="movie.title" class="object-cover h-full md:h-auto md:w-full" />
                    </div>
                    <div class="absolute w-full h-full top-0 z-20 px-10 md:px-15 lg:px-30 flex items-center">
                        <div class="max-w-xl flex flex-col gap-5">
                            <TextSkeleton v-if="loadingHero" :type="'h1'"/>
                            <h1 v-else class="text-[10vw] sm:text-6xl text-slate-900 dark:text-slate-100 font-bold">{{ movie.title }}</h1>
                            <TextSkeleton v-if="loadingHero" :type="'p'" v-for="n in 3" :key="n"/>
                            <p v-else class="text-[3vw] sm:text-lg text-slate-600 dark:text-slate-400 font-medium">{{ movie.overview }}</p>
                            <div class="flex items-center">
                                <TextSkeleton v-if="loadingHero" :type="'button'"/>
                                <Button v-else :typeBtn="`internal`" :linkTo="`/movie/${movie.id}`">
                                    <PlayIcon class="w-6 h-6"/>Ver Detalles
                                </Button>
                            </div>      
                            
                        </div>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>