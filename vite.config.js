import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
        // custom
        {
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from "@vueuse/core",
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from "@vueuse/core",
          ],
          "axios": [
            // default imports
            ["default", "axios"], // import { default as axios } from "axios",
          ],
          "[package-name]": [
            "[import-names]",
            // alias
            ["[from]", "[alias]"],
          ],
        },
      ],
      dirs: [
        // "./hooks",
        // "./composables" // only root modules
        // "./composables/**", // all nested modules
        // ...
      ],
      dts: "./auto-imports.d.ts",
      vueTemplate: false,
      resolvers: [
        /* ... */
      ],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | "readonly" | "readable" | "writable" | "writeable")
      },
    }),
    Pages({
      //想改成自訂router時
      pagesDir: [
        { dir: "src/views", baseRoute: "" },
        { dir: "src/components", baseRoute: "" },
      ],
    }),
  ],
  build: {
    assetsDir: "./assets",
    rollupOptions: {
      input: {
        bind: path.resolve(__dirname, "bind/index.html"),
      }
    },
  },
  // server: {
  //   host: "0.0.0.0",
  //   port: 8080,
  //   open: false,
  //   https: false,
  //   proxy: {
  //     "/Form": {
  //       target: "",
  //       changeOrigin: true,
  //       ws: true,
  //       rewrite: (path) => path.replace(/^\/Form/, ""),
  //     },
  //   },
  // },
})