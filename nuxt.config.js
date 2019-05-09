const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  vuetify: {
    theme: {
      primary: "#3CABAD",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c"
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },

  /*
  ** Global CSS
  */
  css: ["~/assets/style/app.styl"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vuetify"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "nuxt-user-agent",
    ["@nuxtjs/google-analytics", { id: "UA-84932968-3" }]
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
