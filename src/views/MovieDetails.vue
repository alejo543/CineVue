<script setup>
import { inject, onMounted, watch } from 'vue';
import { useMovieDetail } from '../composables/useMovieDetails';
import { useRoute } from 'vue-router';
import Star from '../icons/Star.vue'
import Calendar from '../icons/Calendar.vue'
import Time from '../icons/Time.vue';
import Company from '../icons/Company.vue';
import PlayIcon from '../icons/PlayIcon.vue';
import ListCast from '../components/ListCast.vue';
import { useModal } from '../composables/useModal';
import Button from '../components/ui/Button.vue';
import Badge from '../components/ui/Badge.vue';
import ListRecomendation from '../components/ListRecomendation.vue';
import TextSkeleton from '../components/ui/skeleton/TextSkeleton.vue';
import MovieCardSkeleton from '../components/ui/skeleton/MovieCardSkeleton.vue';
import HeroSkeleton from '../components/ui/skeleton/HeroSkeleton.vue';

const { openModal } = useModal();
const route = useRoute();
const {findMovie, findMovieVideos, findMovieCast, findMovieRecomendations, loading, movieDetail, movieCast, movieVideos, movieRecomendations} = useMovieDetail()

const loadAllData = (id) => {
    findMovie(id);
    findMovieVideos(id);
    findMovieCast(id);
    findMovieRecomendations(id);
}
onMounted(()=>{
    loadAllData(route.params.id);
})

onMounted(() => {
    loadAllData(route.params.id);
});

watch(
    () => route.params.id,
    (newId, oldId) => {
        // Solo recargar si el ID realmente cambió
        if (newId && newId !== oldId) {
            loadAllData(newId);
            // Opcional: Hacer scroll al inicio de la página
            window.scrollTo(0, 0);
        }
    }
);

const { timeMovieConvert,dateToYearConvert,rateConvert,moneyConvert } = inject('formaters');

const handleMoreInfo = () => {
    openModal(`Reproducir Trailer`, movieVideos.value);
};

</script>
<template>
    <section :class="`min-h-screen h-full pt-[71px] pb-20`">
        <!--<p class="text-white">{{ route.params.id }}</p>-->
        <div class="relative h-full">
            <div class="absolute top-0 w-full z-1">
                <HeroSkeleton v-if="loading" />
                <img v-else-if="!loading && movieDetail && movieDetail.backdrop_path" :src="`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`" :alt="movieDetail.original_title" class="w-full h-full mask-l-from-0% mask-b-from-10% mask-l-to-90% text-slate-100 h-full transition-all duration-400" />
                <img v-else-if="!loading && !movieDetail.backdrop_path" :src="`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(blur)/${movieDetail.poster_path}`" :alt="movieDetail.original_title" class="w-full h-full mask-l-from-0% mask-b-from-10% mask-l-to-90% text-slate-100 h-full transition-all duration-400" />
            </div>
            <div class="relative top-0 z-2 w-full h-full pt-50">
                <div class="flex justify-center h-full">
                    <div class="max-w-6xl w-full px-4">
                        <div class="flex w-full gap-8">
                            <div class="hidden md:flex">
                                <MovieCardSkeleton v-if="loading" />
                                <img v-else :src="`https://media.themoviedb.org/t/p/w300_and_h450_face/${movieDetail.poster_path}`" :alt="movieDetail.original_title" class="rounded-xl"/>
                            </div>
                            <div>
                                <div class="flex gap-3 flex-wrap" >
                                    <TextSkeleton v-if="loading" v-for="n in 3" :type="'p-for'" :key="n"/>
                                    <Badge v-else v-for="genre in movieDetail.genres" :key="genre.id" textSize="text-xs" :fullRounded="false">
                                        {{ genre.name }}
                                    </Badge>
                                </div>
                                <div class="flex flex-col gap-1 mt-3">
                                    <TextSkeleton v-if="loading" :type="'h1'"/>
                                    <h1 v-else class="text-[10vw] md:text-6xl text-slate-900 dark:text-slate-100 font-bold transition-all duration-400">{{ movieDetail.title }}</h1>
                                    <TextSkeleton v-if="loading" :type="'p'"/>
                                    <i v-if="!loading && movieDetail && movieDetail.tagline" class="text-2xl text-slate-600 dark:text-slate-400 font-normal transition-all duration-400">"{{ movieDetail.tagline }}"</i>
                                </div>
                                <div class="flex flex-wrap gap-5 mt-4">
                                    <TextSkeleton v-if="loading" v-for="n in 3" :type="'p-for'" :key="n"/>
                                    <p v-if="!loading" class="text-sm text-slate-800 dark:text-slate-200 font-medium flex gap-1 items-center"><Star class="w-6 h-6 text-amber-600 dark:text-amber-300"/>{{ rateConvert(movieDetail.vote_average) }}/10</p>
                                    <p v-if="!loading && movieDetail && movieDetail.release_date" class="text-sm text-slate-800 dark:text-slate-200 font-medium flex gap-1 items-center"><Calendar class="w-6 h-6"/>{{ dateToYearConvert(movieDetail.release_date) }}</p>
                                    <p v-if="!loading" class="text-sm text-slate-800 dark:text-slate-200 font-medium flex gap-1 items-center"><Time class="w-6 h-6" />{{ timeMovieConvert(movieDetail.runtime) }}</p>
                                </div>
                                <div class="flex items-center mt-4">
                                    <TextSkeleton v-if="loading" :type="'button'"/>
                                    <Button v-else :typeBtn="'function'" @click="handleMoreInfo">
                                        <PlayIcon class="w-6 h-6"/>Ver Trailer
                                    </Button>
                                </div>    
                            </div>
                        </div>
                        <div class="grid grid-cols-5 pt-20 gap-10">
                            <div class="col-span-5 md:col-span-3 flex flex-col gap-10">
                                <div class="flex flex-col gap-3">
                                    <h2 class="text-[8vw] sm:text-3xl text-slate-800 dark:text-slate-200 font-bold transition-all duration-400 border-l-4 border-blue-600 pl-2">Sinopsis</h2>
                                    <TextSkeleton v-if="loading"  v-for="n in 3" :type="'p'" :key="n"/>
                                    <p v-else class="text-slate-600 dark:text-slate-400 font-medium transition-all duration-400">{{ movieDetail.overview }}</p>
                                </div>
                                <div v-if="movieCast.length > 0" class="flex flex-col gap-3">
                                    <h2 class="text-[8vw] sm:text-3xl text-slate-800 dark:text-slate-200 font-bold transition-all duration-400 border-l-4 border-blue-600 pl-2">Cast</h2>

                                    <ListCast :cast="movieCast"/>
                                </div>
                            </div>
                            <div v-if="movieDetail.production_companies || movieDetail.status || movieDetail.revenue" class="col-span-5 md:col-span-2 grid gap-10">
                                <div class="p-5 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 transition-all duration-400">
                                    <h3 class="text-slate-800 dark:text-slate-200 font-bold transition-all duration-400">Production</h3>
                                    <div class="flex flex-col gap-3 mt-5">
                                        <TextSkeleton v-if="loading"  v-for="n in 3" :type="'p'"/>
                                        <div v-else class="flex items-center gap-2" v-for="company in movieDetail.production_companies" :key="company.id">
                                            <div class="bg-slate-300 dark:bg-slate-800 text-slate-600 dark:text-slate-500 rounded-md p-2 transition-all duration-400"><Company class="w-6 h-6"/></div>
                                            
                                            <p class="text-slate-800 dark:text-slate-200 font-semibold transition-all duration-400">{{ company.name }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-slate-800 dark:text-slate-200 font-bold transition-all duration-400">Quick Stats</h3>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                                        <div class="p-5 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 transition-all duration-400">
                                            <p class="text-center text-slate-600 dark:text-slate-600 font-bold transition-all duration-400">status</p>
                                            <TextSkeleton v-if="loading"  :type="'p'"/>
                                            <p v-else class="text-center text-md text-slate-800 dark:text-slate-200 font-bold">{{ movieDetail.status }}</p>
                                        </div>
                                        <div class="p-5 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-800 transition-all duration-400">
                                            <p class="text-center text-slate-600 dark:text-slate-600 font-bold transition-all duration-400">Budget</p>
                                            <TextSkeleton v-if="loading"  :type="'p'"/>
                                            <p v-else class="text-center text-md text-slate-800 dark:text-slate-200 font-bold transition-all duration-400">{{ moneyConvert(movieDetail.revenue) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full">
                                <div class="flex flex-col gap-3">
                                    <h2 class="text-[8vw] sm:text-3xl text-slate-800 dark:text-slate-200 font-bold transition-all duration-400 border-l-4 border-blue-600 pl-2">Recomendaciones</h2>

                                    <ListRecomendation v-if="movieRecomendations.length > 0" :recomendations="movieRecomendations" :type="'recomendation'"/>
                                    <p v-else class="text-slate-600 dark:text-slate-400 font-medium transition-all duration-400">No tenemos suficiente información para recomendarte películas basadas en Shelter: El Protector. Puedes ayudarnos valorando las películas que has visto.</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>