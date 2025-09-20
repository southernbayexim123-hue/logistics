import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   server: {
    allowedHosts: [
      '.trycloudflare.com'   // allow all tunnel subdomains
    ]
  },
  plugins: [react(),  tailwindcss()],  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      
    },
  },
});
