<script setup>
import HeroSkeleton from './HeroSkeleton.vue';
import MovieCardSkeleton from './MovieCardSkeleton.vue';
import TextSkeleton from './TextSkeleton.vue';

const props = defineProps({
  section:{type:String,required:true},
  type:{type:String, required:false}
});

const skeletonCount = 10;
</script>
<template>
    <HeroSkeleton  v-if="props.section === 'hero'" />
    <div v-else-if="props.section === 'listMovies'" id="skeletonList" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <MovieCardSkeleton v-for="n in skeletonCount" :key="n"/>
    </div>
    <TextSkeleton v-else-if="props.section === 'text'" :type="props.type"/>
</template>