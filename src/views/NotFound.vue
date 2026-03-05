<script setup>
import PageNotFoundIMGLigh from '../assets/error-404-light.png'
import PageNotFoundIMGDark from '../assets/error-404-dark.png'
import { inject, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import Button from '../components/ui/Button.vue';
import Badge from '../components/ui/Badge.vue';
import { useSeo } from '../composables/useSeo';

useSeo({
    title:'CineVue - Not Found',
    description:'Lo sentimos pero no se pudo encontrar esta página.'
},'page')

const { isDark } = inject('theme')


</script>
<template>
    <section class="flex justify-center items-center h-screen">
        <div class="max-w-6xl flex flex-col">
            <img :src="`${isDark ? PageNotFoundIMGDark : PageNotFoundIMGLigh}`" class="w-full"/>
            <div class="flex justify-center mt-[-4%] mb-5">
                <Badge :fullRounded="true">Error Code: 404</Badge>
            </div>
            <h1 class="text-center text-6xl text-slate-900 dark:text-slate-100 font-bold mb-5">Page Not Found</h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 font-medium text-center mb-10">It seems you've wandered off-script. The page you're looking for isn't here.</p>
            <div class="flex justify-center">
                <Button :typeBtn="`internal`" :linkTo="`/`" ariaLabel="back to home">
                    Go Back Home
                </Button>
            </div>
            
        </div>
    </section>
</template>