import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_PUBLIC_URL,
  build: {
    assetsDir: "web/assets/",
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
