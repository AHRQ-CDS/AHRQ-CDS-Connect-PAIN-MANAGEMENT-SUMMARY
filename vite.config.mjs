import { resolve } from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Specify the path at which the application will be deployed on a server. The path MUST end with "/".
  // To deploy at the root path, use "/" or remove the "base" property entirely.
  base: "/AHRQ-CDS-Connect-PAIN-MANAGEMENT-SUMMARY/",
  plugins: [
    react(),
    nodePolyfills({
      // include polyfills for the modules that Vite/Rollup warns about
      include: ["events", "timers", "fs"]
    })
  ],
  // Stub out large XML JS files that are referenced but not needed
  resolve: {
    alias: {
      "./fhir/models": "/src/stubs/fhir-models.js",
      "./modelInfos/fhir-modelinfo-1.6.xml.js":
        "/src/stubs/fhir-modelinfo-stub.xml.js",
      "./modelInfos/fhir-modelinfo-3.0.0.xml.js":
        "/src/stubs/fhir-modelinfo-stub.xml.js",
      "./modelInfos/fhir-modelinfo-4.0.0.xml.js":
        "/src/stubs/fhir-modelinfo-stub.xml.js"
    }
  },
  build: {
    // default chunk size limit is 500, but that's nearly impossible due to large JSON files
    chunkSizeWarningLimit: 1500,
    // specify rollup options to enable multiple entry points and break chunks up to smaller sizes
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        launch: resolve(__dirname, "launch.html")
      },
      output: {
        manualChunks: (id) => {
          if (
            /src[/\\]cql[/\\]dstu2[/\\]/.test(id) ||
            /fhir-modelinfo-1\.0\.2\.xml\.js/.test(id)
          ) {
            return "dstu2";
          }
          if (
            /src[/\\]cql[/\\]r4[/\\]/.test(id) ||
            /fhir-modelinfo-4\.0\.1\.xml\.js/.test(id)
          ) {
            return "r4";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  }
});
