import { ref } from "vue";

export function getYears(){
    const currentYear = new Date().getFullYear();
    const years = ref([]);
    var startYear = 1980;
    for(var i=startYear; i<= currentYear; i++){
        years.value.push(startYear++);
    }
    const ascOrder =  years.value.sort((a, b) => b - a);
    //console.log(ascOrder)
    return {ascOrder};
}