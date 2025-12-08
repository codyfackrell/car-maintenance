import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // https://vite.dev/config/
  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
