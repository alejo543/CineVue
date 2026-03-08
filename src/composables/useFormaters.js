import { onMounted, watch, ref } from "vue"


export function useFormaters(){
    
    const timeMovieConvert = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');

        return `${hours}h ${formattedMinutes}m`;
    }

    const dateToYearConvert = (date) => {
        const yearDate = date.slice(0,4);

        return yearDate;
    }

    const rateConvert = (rate) => {
        const rateRound =  Math.round(rate * 10) / 10;

        return rateRound;
    }

    const formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    const moneyConvert = (amount) => {
        if (!amount || amount === 0) return "$0";

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact', // <-- Esto convierte 1.000.000 en 1M automáticamente
            maximumFractionDigits: 1 // Para que muestre algo como $1.5B en lugar de $1B
        });

        return formatter.format(amount);
        }


    return{timeMovieConvert,dateToYearConvert,rateConvert,moneyConvert}
}