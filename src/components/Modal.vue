<script setup>
import { useModal } from '../composables/useModal';
import CloseIcon from '../icons/Close.vue';
import { useMovieDetail } from '../composables/useMovieDetails';
const { isOpen, modalTitle, modalContent, closeModal } = useModal();
const {findMovie, movieDetail, timeConvert, findMovieVideos, findMovieCast,loading, movieCast, movieVideos} = useMovieDetail()
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center h-screen p-4 overflow-y-hidden">
        <div @click="closeModal" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div class="relative bg-black w-full xl:w-[70%] h-[60vw] xl:h-[80%] rounded-xl">
            <div class="flex items-center justify-between p-4">
                <h2 class="text-2xl md:text-4xl text-slate-100 font-bold transition-all duration-400">{{ modalTitle }}</h2>
                <button @click="closeModal" class="hover:bg-white/5 text-white p-2 rounded transition-all duration-400"><CloseIcon class="w-5 h-5"/></button>
            </div>
            <div class="modal-body w-full h-[90%]">
                <iframe id="player" type="text/html" width="100%" height="100%"
                :src="`http://www.youtube.com/embed/${modalContent.key}?enablejsapi=1`"
                frameborder="0"></iframe>
            </div>
           
        </div>
    </div>
  </Teleport>
</template>