/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react(), svgr()],
  // base: './'
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
