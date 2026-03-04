import { onMounted, watch, ref } from "vue"
export function useMovies(){
    const textBusqueda = ref('');
    const movies = ref([]);
    const loading = ref(false);
    const moviesInHero = ref([]);
    const loadingHero = ref(false);
    

    const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';
    const ENDPOINT = ref('');
    const ENDPOINTHERO = '/discover/movie';
    const PAGE =  ref(1)

    /*const getGenres = async () => {
        try {
            const res = await fetch(`${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`);
            const data = await res.json();
            genres.value = data.genres;
        } catch (e) {
            console.error("Error cargando géneros");
        }
    };*/
    let searchTimer;
    watch(textBusqueda, (newSearch) => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
        if(newSearch.length > 2){
            searchMovie();
        }else{
            searchMovie()
        }
        }, 400) 
    })

    const searchMovie = async (isNewSearch = true) => {
        loading.value = true;

        if (isNewSearch) {
            PAGE.value = 1;
        }
        if(!textBusqueda.value){
            ENDPOINT.value = `/discover/movie?page=${PAGE.value}`;
            //console.log("URL final:", `${BASE_URL}${ENDPOINT.value}`);
        }else{
            ENDPOINT.value = `/search/movie?query=${textBusqueda.value}&page=${PAGE.value}`;
            //console.log("URL final:", `${BASE_URL}${ENDPOINT.value}`);
        }

        //console.log("URL final:", `${BASE_URL}${ENDPOINT}`);
        
        try{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
                }
            };
            const response = await fetch(`${BASE_URL}${ENDPOINT.value}`, options);
            const data = await response.json();
            if (isNewSearch) {
                // Si es búsqueda nueva, borramos lo anterior y ponemos lo nuevo
                movies.value = data.results;
            } else {
                // Si es "Cargar más", concatenamos
                movies.value.push(...data.results);
            }

            PAGE.value++
            //console.log(movies.value)
        }catch(error){
            console.log("Error al buscar:", error);
        }finally{
            loading.value = false;
        }
    }

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
            const response = await fetch(`${BASE_URL}${ENDPOINTHERO}`, options);
            const data = await response.json();
            moviesInHero.value = data.results.slice(0,5);
            //console.log(data.results.slice(0,5))
        }catch(error){
            console.log("Error al buscar:", error)
        }finally{
            loadingHero.value = false;
        }
    }

    return{textBusqueda,movies,loading,searchMovie,moviesInHero,moviesHero, loadingHero}
}