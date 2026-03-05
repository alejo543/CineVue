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
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import PlayIcon from '../icons/PlayIcon.vue';
import Button from './ui/Button.vue';
import HeroSkeleton from './ui/skeleton/HeroSkeleton.vue';
import TextSkeleton from './ui/skeleton/TextSkeleton.vue';

const modules = [Autoplay,Navigation,Pagination];

const { moviesInHero,loadingHero } = inject('movie')

</script>
<template>
    <section :class="`flex justify-center min-h-[500px] md:min-h-[800px] ${loadingHero ? 'animate-pulse' : ''} `">
        <div class="w-full relative pt-[70px] ">
            <swiper
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
                    <div class="mask-l-from-0% mask-b-from-10% md:mask-l-to-90% text-slate-100 h-full transition-all duration-400">
                        <HeroSkeleton v-if="loadingHero"/>
                        <img v-else-if="!loadingHero && movie.backdrop_path" 
                            :src="`https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces${movie.backdrop_path}`" 
                            :srcset="`
                                https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces${movie.backdrop_path} 1280w,
                                https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path} 1920w
                            `"
                            sizes="(max-width: 1280px) 1280px, 1920px"
                            :alt="movie.title" class="object-cover h-full md:w-full" 
                            fetchpriority="high" 
                            loading="eager"
                            decoding="sync"
                            width="1920"
                            height="800" 
                        />
                        <img v-else-if="!loadingHero && !movie.backdrop_path" 
                            :src="`https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces_filter(blur)${movie.poster_path}`" 
                            :srcset="`
                                https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces_filter(blur)${movie.poster_path} 1280w,
                                https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(blur)${movie.poster_path} 1920w
                            `"
                            sizes="(max-width: 1280px) 1280px, 1920px" 
                            :alt="movie.title" 
                            class="object-cover h-full md:w-full" 
                            fetchpriority="high" 
                            loading="eager"
                            decoding="sync" 
                            width="1920"
                            height="800" 
                        />
                    </div>
                    <div class="absolute w-full h-full top-0 z-20 px-10 md:px-15 lg:px-30 flex items-center">
                        <div class="max-w-xl flex flex-col gap-5">
                            <TextSkeleton v-if="loadingHero" :type="'h1'"/>
                            <h1 v-else class="text-[10vw] sm:text-6xl text-slate-900 dark:text-slate-100 font-bold">{{ movie.title }}</h1>
                            <TextSkeleton v-if="loadingHero" :type="'p'" v-for="n in 3" :key="n"/>
                            <p v-else class="text-[3vw] sm:text-lg text-slate-600 dark:text-slate-400 font-medium">{{ movie.overview }}</p>
                            <div class="flex items-center">
                                <TextSkeleton v-if="loadingHero" :type="'button'"/>
                                <Button v-else :typeBtn="`internal`" :linkTo="`/movie/${movie.id}`" ariaLabel="go to movie details">
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