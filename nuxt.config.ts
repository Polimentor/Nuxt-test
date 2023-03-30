// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // routeRules: {
    //     '*': {
    //         ssr: false
    //     }
    // },

    vite: {
        server: {
            fs: {
                allow: ["C:/Users/user/node_modules"]
            }
        }
    }
})
