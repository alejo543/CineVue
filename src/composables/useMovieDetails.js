import { ref } from "vue";

export function useMovieDetail(){
    //const route =  useRoute()
    const movieDetail = ref({});
    const movieVideos = ref([]);
    const movieCast = ref([]);
    const movieRecomendations = ref([]);
    const loading = ref(true);

    const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
    //const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';
    const ENDPOINT = '/movie/';

    const findMovie = async (id) =>{
        loading.value = true;

        try{
            const option = {
                method:'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };

            //console.log(`${BASE_URL}${ENDPOINT}${id}`)
            const response = await fetch(`${BASE_URL}${ENDPOINT}${id}`,option);
            const data = await response.json();
            movieDetail.value = data;
            //console.log(data);
        }catch(error){
            console.log("Error al buscar:", error);
        }finally{
            loading.value = false;
        }
    }

    const findMovieVideos = async (id) =>{
        loading.value = true;

        try{
            const option = {
                method:'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };

            //console.log(`${BASE_URL}${ENDPOINT}${id}`)
            const response = await fetch(`${BASE_URL}${ENDPOINT}${id}/videos`,option);
            const data = await response.json();
            movieVideos.value = data.results[0];
            //console.log(data.results[0]);
        }catch(error){
            console.log("Error al buscar:", error);
        }finally{
            loading.value = false;
        }
    }

    const findMovieCast = async (id) =>{
        loading.value = true;

        try{
            const option = {
                method:'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };

            //console.log(`${BASE_URL}${ENDPOINT}${id}`)
            const response = await fetch(`${BASE_URL}${ENDPOINT}${id}/credits`,option);
            const data = await response.json();
            movieCast.value = data.cast.splice(0,10);
            //console.log(data.cast);
        }catch(error){
            console.log("Error al buscar:", error);
        }finally{
            loading.value = false;
        }
    }

    const findMovieRecomendations = async (id) =>{
        loading.value = true;
        try{
            const option = {
                method:'GET',
                headers: {
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };

            //console.log(`${BASE_URL}${ENDPOINT}${id}`)
            const response = await fetch(`${BASE_URL}${ENDPOINT}${id}/recommendations`,option);
            const data = await response.json();
            movieRecomendations.value = data.results;
            //console.log(data.results);
        }catch(error){
            console.log("Error al buscar:", error);
        }finally{
            loading.value = false;
        }
    }


    return {findMovie,findMovieVideos,findMovieCast, findMovieRecomendations, movieDetail, movieVideos, movieCast, movieRecomendations, loading}
}

