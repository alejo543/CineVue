<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  },
  typeBtn:{type:String,required:true},
  linkTo:{type:String},
  widthBtn:{type:String,required:false},
  ariaLabel:{type:String,required:false}
});

const buttonClasses = `flex justify-center items-center bg-blue-600 font-semibold text-white py-2 text-[4vw] sm:text-base px-[2vw] rounded-lg gap-2 transition-all duration-400`
</script>
<template>
    <button v-if="props.typeBtn === 'function'" @click="props.onClick" :disabled="disabled" :aria-label="ariaLabel" :class="`${widthBtn} ${buttonClasses}`">
        <slot></slot>
    </button> 
    <RouterLink v-else-if="props.typeBtn === 'internal'" :to="props.linkTo" :class="buttonClasses" :aria-label="ariaLabel">
        <slot></slot>
    </RouterLink>
</template>