import { useHead } from '@unhead/vue'
import { computed, unref } from 'vue'
import { useSeoMeta } from '@unhead/vue';


export function useSeo(seoData,type){

    return useSeoMeta({
        // Usamos un computed para que reaccione cuando seoData cambie
        title: computed(() => {
        const data = unref(seoData); // unref por si pasas un ref()
            if (!data?.title) return 'Cargando... | CineVue';
            return type === 'page' ? data.title : `${data.title} | CineVue`;
        }),
        description: computed(() => {
            const data = unref(seoData);
            return type === 'page' ? data?.description : data?.overview;
        })
    });

}
