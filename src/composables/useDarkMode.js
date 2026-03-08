import { ref, watch } from 'vue';

export function useDarkMode(){
    const isDark = ref(false);

    const toggleDarkMode = () =>{
        isDark.value = !isDark.value
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    }

    const initTheme = ()=>{
        const savedTheme =  localStorage.getItem('theme');
        const prefersDark =  window.matchMedia('(prefers-color-scheme:dark)').matches;
        isDark.value =  savedTheme === 'dark' || (savedTheme === null && prefersDark);
        document.body.classList.toggle('dark',isDark.value);
    }; 

    watch(isDark,(newVal)=>{
        document.body.classList.toggle('dark', newVal);
    })

    return{isDark,toggleDarkMode,initTheme}

    //
}