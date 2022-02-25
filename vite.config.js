import { viteStaticCopy } from "vite-plugin-static-copy";

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
    assetsDir: "assets",
    assetsInlineLimit: 0,
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
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "img/**/*",
          dest: "img",
        },
      ],
    }),
  ],
  compilerOptions: {
    types: ["vite/client"],
  },
};

export default config;
