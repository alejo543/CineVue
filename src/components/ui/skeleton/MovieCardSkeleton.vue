<script setup>
import PosterNotFoundDark from '../../../assets/img/poster-not-found-dark.png'
</script>
<template>
    <div class="group relative animate-pulse w-full h-full rounded-xl overflow-hidden">
        <img :src="PosterNotFoundDark" :alt="'skeleton img'" class="invisible"/>
        <div class="absolute z-10 bg-slate-300 dark:bg-slate-800 top-0 inset-s-0 w-full h-full">
        </div>  
    </div>
</template>