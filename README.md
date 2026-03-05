# 🎬 CineVue - Explorador de Películas

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4fc08d?style=for-the-badge&logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

**CineVue** es una plataforma moderna de exploración cinematográfica construida con **Vue 3** y **Tailwind CSS**. La aplicación ofrece una experiencia de navegación fluida y optimizada, permitiendo a los usuarios descubrir estrenos, buscar títulos específicos, consumiendo datos en tiempo real de la API de **The Movie Database (TMDB)**.



## 🚀 Características Principales

- **Búsqueda con Debouncing:** Optimización de peticiones a la API mediante un temporizador que evita consultas innecesarias mientras el usuario escribe.
- **Filtrado Inteligente:** Sistema híbrido que combina búsqueda por texto y filtrado por año de lanzamiento usando los endpoints `/search` y `/discover`.
- **SEO Dinámico:** Implementación de un Composable reutilizable para gestionar metatags (títulos, descripciones) de forma dinámica por película.
- **Arquitectura Basada en Composables:** Lógica de negocio centralizada y limpia utilizando la **Composition API**.
- **Diseño Responsive:** Interfaz moderna adaptada a dispositivos móviles y escritorio, con soporte nativo para **Dark Mode**.

## 🛠️ Stack Tecnológico

- **Framework:** [Vue.js 3](https://vuejs.org/) (Script Setup).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/).
- **Enrutado:** [Vue Router](https://router.vuejs.org/).
- **SEO:** [@unhead/vue](https://unhead.unjs.io/).
- **Construcción:** [Vite](https://vitejs.dev/).
- **API Externa:** [TMDB API](https://developer.themoviedb.org/).



## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/nombre-de-tu-repo.git](https://github.com/tu-usuario/nombre-de-tu-repo.git)
2. **Instala las dependencias:**
   ```bash
   npm install
3. **Variables de Entorno:**
  Crea un archivo .env en la raíz y añade tus credenciales de TMDB:
   ```bash
   VITE_API_READ_ACCESS_TOKEN=tu_bearer_token_aqui
   VITE_API_KEY=tu_api_key_aqui
4. **Ejecuta el proyecto:**
   ```bash
   npm run dev
## 📂 Estructura del Proyecto
  ```bash
  src/
  ├── components/     # Componentes de la UI (Hero, Navbar, MovieCard, etc.)
  ├── composables/    # Lógica reutilizable (useMovies, useSeo, getYears)
  ├── views/          # Páginas principales (Home, MovieDetails)
  ├── router/         # Configuración de rutas dinámicas
  └── main.js         # Configuración e instancia global de la app
