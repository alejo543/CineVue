import { onMounted, watch, ref } from "vue"
const moviesInHero = ref([]);
const loadingHero = ref(false);

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const ENDPOINT = '/discover/movie';

export function useMoviesHero(){
    const moviesHero = async () => {
        loadingHero.value = true
        try{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };
            const response = await fetch(`${BASE_URL}${ENDPOINT}`, options);
            const data = await response.json();
            moviesInHero.value = data.results.slice(0,5);
            //console.log(data.results.slice(0,5))
        }catch(error){
            console.log("Error al buscar:", error)
        }finally{
            loadingHero.value = false;
        }
    }
    return{moviesInHero,moviesHero, loadingHero}
}