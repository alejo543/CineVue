import { useHead } from '@unhead/vue'
import { computed } from 'vue'

export function useSeo(seoData,type){

    return useHead({
        // Usamos una función o un computed para mantener la reactividad en JS
        title: type == 'page' ? seoData.name :  computed(() => seoData?.name ? `${seoData.name} | CineVue` : 'Cargando...'),
        meta: [
            {
            name: 'description',
            content: type == 'page' ? seoData.description : computed(() => props.movie?.overview || 'Detalles de la película')
            },
            /*{
            property: 'og:title',
            content: computed(() => props.movie?.title)
            },
            {
            property: 'og:image',
            content: computed(() => props.movie?.poster_path 
                ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` 
                : '/default-share.jpg')
            }*/
        ],
    })

}
