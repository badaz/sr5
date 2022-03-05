import replace from "@rollup/plugin-replace";
// import liveReload from "vite-plugin-live-reload";
const path = require("path");

const config = {
  root: "src/",
  publicDir: path.resolve(__dirname, "public"),
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
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: "sr5",
      entry: path.resolve(__dirname, "src/sr5.es.js"),
      formats: ["es"],
      fileName: "sr5",
    },
  },
  plugins: [
    {
      ...replace({
        values: { "systems/sr5/assets": "./assets" },
        include: ["src/**/*.less"],
      }),
      apply: "build",
    },
    // liveReload("**/*", {
    //   alwaysReload: true,
    //   root: path.resolve(__dirname, "public"),
    // }),
  ],
  compilerOptions: {
    types: ["vite/client"],
  },
};

export default config;
