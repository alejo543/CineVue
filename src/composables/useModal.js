import { ref, provide, inject, watch } from 'vue';

const modalSymbol = Symbol(); // Clave única para evitar colisiones

export function useModalProvider() {
    const isOpen = ref(false);
    const modalContent = ref({});
    const modalTitle = ref('');

    watch(isOpen, (newVal) => {
        if (newVal) {
            // Si el modal se abre, ocultamos el scroll del body
            document.body.style.overflow = 'hidden';
            // Opcional: Evitar salto de scroll si el scrollbar ocupa espacio
            document.body.style.paddingRight = '15px'; 
        } else {
            // Si se cierra, devolvemos el scroll
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    });

    const openModal = (title, content) => {
        modalTitle.value = title;
        modalContent.value = content || {};
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
        modalContent.value = {};
    };

    // Proveemos el estado y las funciones
    provide(modalSymbol, {
        isOpen,
        modalTitle,
        modalContent,
        openModal,
        closeModal
    });
}

export function useModal() {
    const context = inject(modalSymbol);
    if (!context) throw new Error("useModal debe usarse dentro de un componente que use useModalProvider");
    return context;
}