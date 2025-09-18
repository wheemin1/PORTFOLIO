import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Conditionally import Replit plugins only in Replit environment
const getReplitPlugins = async () => {
  if (process.env.REPL_ID && process.env.NODE_ENV !== "production") {
    try {
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
      const cartographer = await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer());
      return [runtimeErrorOverlay(), cartographer];
    } catch (error) {
      console.warn("Replit plugins not available, skipping...");
      return [];
    }
  }
  return [];
};

export default defineConfig(async () => {
  const replitPlugins = await getReplitPlugins();
  
  return {
    plugins: [
      react(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: import.meta.dirname,
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port: 3010,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
