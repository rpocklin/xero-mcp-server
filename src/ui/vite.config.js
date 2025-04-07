// vite.config.js
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: './main.jsx',
      name: 'MCP Applet',
      fileName: (format) => `mcp-applet.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react()],
});