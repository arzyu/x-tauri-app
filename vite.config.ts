import { defineConfig, loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tsconfigPaths(),
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env["HTML_TITLE"]
          }
        }
      }),
    ]
  }
})
