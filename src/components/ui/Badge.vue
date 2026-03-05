<script setup>

const props = defineProps({
  textSize:{type:String,required:false},
  fullRounded:{type:Boolean,required:true}
});

const badgeClasses = "text-blue-600 font-semibold bg-blue-500/10 dark:bg-blue-700/20 border border-blue-600 py-1 px-5 uppercase"
</script>
<template>
    <p :class="`${textSize} ${fullRounded ? 'rounded-full' : 'rounded-lg'} ${badgeClasses}`">
        <slot></slot>
    </p>
</template>