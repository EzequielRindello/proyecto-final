import Inspect from "vite-plugin-inspect"
import { resolve } from "path"

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        principales: resolve(__dirname, "src/principales/principales.html"),
        secundarios: resolve(__dirname, "src/secundarios/secundarios.html"),
        favoritos: resolve(__dirname, "src/favoritos/favoritos.html")
      }
    }
  }
}
