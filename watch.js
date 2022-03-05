const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

// One-liner for current directory
chokidar.watch(path.resolve(__dirname, "public")).on("change", (pathname) => {
  console.log("changed: " + pathname);
  fs.copyFile(
    pathname,
    pathname.replace(
      path.resolve(__dirname, "public"),
      path.resolve(__dirname, "dist")
    ),
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    }
  );
});
