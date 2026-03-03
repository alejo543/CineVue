<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProfileNotFound from '../assets/profileNotfound.png'
// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const props = defineProps({
  cast: Array
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
                <SwiperSlide v-for="actor in cast" :key="actor.id" class="flex justify-center w-full px-2 w-30" >
                    <div class="flex flex-col justify-center w-full">
                        <img v-if="actor.profile_path" :src="`https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`"  class="w-full rounded-md object-cover"/>
                        <img v-else :src="ProfileNotFound"  class="w-full rounded-md object-cover"/>
                        <p class="text-center text-sm text-slate-800 dark:text-slate-200 font-bold mt-2">{{ actor.name }}</p>
                        <p class="text-center text-xs text-slate-600 dark:text-slate-600 font-bold transition-all duration-400">{{ actor.character}}</p>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>