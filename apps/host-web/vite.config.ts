import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp:
          process.env.NODE_ENV === "development"
            ? "http://localhost:5001/assets/remoteEntry.js"
            : "https://remote.smartystudios.com/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    {
      name: "vite-plugin-reload-endpoint",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/__fullReload") {
            server.hot.send({ type: "full-reload" });

            res.end("Full reload triggered");
          } else {
            next();
          }
        });
      },
    },
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
