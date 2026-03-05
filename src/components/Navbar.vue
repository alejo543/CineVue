<script setup>
import { computed, inject, ref, watch, watchEffect } from 'vue'
import PlaySolid from '../icons/PlaySolid.vue';
import Sun from '../icons/Sun.vue';
import Moon from '../icons/Moon.vue';
import { RouterLink, useRoute } from 'vue-router';
import Search from '../icons/Search.vue';

const { isDark,toggleDarkMode } = inject('theme');
const { textBusqueda,searchMovie } = inject('movie');
const showSearchBar = ref(false);
const route = useRoute();
const hiddeBtnSearch = ref(false);

watchEffect(()=>{
    if(route.path == "/not-found" || route.path.includes('/movie/')){
        hiddeBtnSearch.value = true
        showSearchBar.value = false
    }else{
        hiddeBtnSearch.value = false
    }
})

const classBtnSearch = computed(()=>{
    if(hiddeBtnSearch.value){
        return 'hidden'
    }else{
        return 'flex'
    }
})


function togglerSearchBar(val){
    showSearchBar.value = val
}

const classInput = computed(()=>{
    if(showSearchBar.value){
        return 'translate-y-[70px]'
    }else{
        return '-translate-y-[70px]'
    }
})

</script>
<template>
    <header class="fixed z-20 top-0 transition-all duration-400 w-full shadow-xl">
        <div class="relative z-15 bg-slate-300 dark:bg-slate-900 w-full z-20 flex flex-col md:flex-row justify-center py-3 px-3 xl:px-0 transition-all duration-400">
            <nav class="max-w-6xl flex justify-between items-center w-full">
                <RouterLink to="/" class="text-salte-900 dark:text-slate-100 font-bold text-xl flex items-center gap-2 transition-all duration-400"><PlaySolid class="w-10 h-10 text-blue-600"/>CineVue</RouterLink>
                <div class="flex item-center gap-4">
                    <button aria-label="theme searchbar" :class="`${classBtnSearch} p-3 dark:bg-white/10 rounded-lg text-slate-700 dark:text-white border border-slate-400 dark:border-white/20 hover:bg-slate-400/20 hover:dark:bg-salate-200/15 transition-all duration-400`" @click="togglerSearchBar(!showSearchBar)">
                        <Search :class="`w-5 h-5`"/>
                    </button>
                    <button aria-label="theme toggler" class="p-3 dark:bg-white/10 rounded-lg text-slate-700 dark:text-white border border-slate-400 dark:border-white/20 hover:bg-slate-400/20 hover:dark:bg-salate-200/15 transition-all duration-400" @click="toggleDarkMode()">
                        <Sun v-if="!isDark" :class="`w-5 h-5`"/>
                        <Moon v-else :class="`w-5 h-5`"/>
                    </button>
                </div>
            </nav> 
        </div>
        
        <div :class="`${classInput} w-full absolute top-0 z-10 bg-slate-100 dark:bg-slate-800 flex justify-center transition-all duration-400 border-b border-slate-400 dark:border-slate-800`">
            <div class="max-w-6xl w-full px-3 xl:px-0">
                <div class="flex gap-0 items-center bg-slate-100 dark:bg-slate-800/90 transition-all duration-400">
                    <Search class="size-5 text-slate-900 dark:text-slate-300"/>
                    <input :class="`text-slate-900 dark:text-slate-300 focus:outline-hidden px-1 py-3 w-full transition-all duration-400`" type="text" v-model="textBusqueda" @keyup.enter="searchMovie" placeholder="Escribe una película (ej: Batman)" />
                </div>
            </div>
        </div>       
    </header>
    
</template>