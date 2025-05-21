// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/budget-tracker-frontend/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
