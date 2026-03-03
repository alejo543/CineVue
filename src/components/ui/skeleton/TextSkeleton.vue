<script setup>
const props = defineProps({
  type:{type:String, required:false}
});

</script>
<template>
    <div v-if="props.type == 'h1'"  class="animate-pulse w-[90%] h-13 bg-slate-300 dark:bg-slate-800 rounded-full mb-2"></div>
    <div v-else-if="props.type == 'p'"  class="animate-pulse w-[100%] h-4 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
    <div v-else-if="props.type == 'p-for'"  class="animate-pulse w-[20%] h-5 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
    <div v-else-if="props.type == 'button'"  class="animate-pulse w-[15vw] h-8 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
</template>