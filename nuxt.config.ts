// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss", "swiper/css", "swiper/css/pagination"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            NUXT_EMAILJS_SERVICE_ID: process.env.NUXT_EMAILJS_SERVICE_ID,
            NUXT_EMAILJS_TEMPLATE_ID:process.env.NUXT_EMAILJS_TEMPLATE_ID,
            NUXT_EMAILJS_USER_ID:process.env.NUXT_EMAILJS_USER_ID,
        }
    },
    nitro: {
        devServer: {
          watch: ['./src']
        }
    },
    app: {
        head: {
            title: "Compose Tech"
        }
    }
})
