<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import MovieCard from './MovieCard.vue';

const props = defineProps({
  recomendations: Array
})


const modules = [Autoplay,EffectFade,Navigation, Pagination];

</script>
<template>
    <section class="flex justify-center pt-8">
        <div class="w-full">
            <swiper
            :slidesPerView="3"
            :spaceBetween="0"
         
            :breakpoints="{
            '640': {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            '1024': {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            }"
            :modules="modules"
            class="w-full flex gap-10"
            
            >
                <SwiperSlide v-for="recomendation in recomendations" :key="recomendation.id" class="flex justify-center w-full px-2 w-30" >
                    <MovieCard :movie="recomendation" :type="'recomendation'"/>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>