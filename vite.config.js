import handlebars from "vite-plugin-handlebars";

const config = {
  publicDir: "public",
  base: "/systems/sr5/",
  server: {
    port: 30001,
    open: true,
    proxy: {
      "^(?!/systems/sr5)": "http://localhost:30000/",
      "/socket.io": {
        target: "ws://localhost:30000",
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: "sr5",
      entry: "sr5.js",
      formats: ["es"],
      fileName: "sr5",
    },
  },
  compilerOptions: {
    types: ["vite/client"],
  },
  plugins: [handlebars()],
};

export default config;
