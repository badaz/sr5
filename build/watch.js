const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const moment = require("moment");

let ready = false;

// With async/await:
async function remove(pathname) {
  try {
    await fs.remove(pathname);
  } catch (err) {
    console.error(err);
  }
}

async function copy(src, dest) {
  try {
    await fs.copy(src, dest);
  } catch (err) {
    console.error(err);
  }
}

// One-liner for current directory
chokidar
  .watch(path.resolve(__dirname, "../public"))
  .on("ready", () => {
    ready = true;
  })
  .on("all", (event, pathname) => {
    if (!ready) {
      return;
    }

    const destPathname = pathname.replace(
      path.resolve(__dirname, "../public"),
      path.resolve(__dirname, "../dist")
    );

    switch (event) {
      case "change":
      case "add":
        copy(pathname, destPathname);
        break;
      case "unlinkDir":
      case "unlink":
        remove(destPathname);
        break;
      default:
        return;
    }

    const date = moment();
    console.log(
      chalk.dim(date.format("HH:mm:ss") + " ") +
        chalk.cyan("[watcher] ") +
        chalk.green(event) +
        " " +
        chalk.dim(pathname.replace(path.resolve(__dirname, "../public"), ""))
    );
  });
