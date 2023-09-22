/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_APP_API_BASE_URL": JSON.stringify(
      process.env.VITE_APP_API_BASE_URL
    ),
  },
});
