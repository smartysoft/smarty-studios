import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp2",
      filename: "remoteEntry.js",
      exposes: {
        "./input": "./src/components/input",
      },
      shared: ["react", "react-dom"],
    }),
    {
      name: "vite-plugin-notify-host-on-rebuild",
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch("http://localhost:5002/__fullReload");
          } catch (e) {
            console.log(e);
          }
        }
      },
    },
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5003,
    strictPort: true,
    cors: true,
  },
});
