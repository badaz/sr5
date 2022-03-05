const fs = require("fs-extra");
const archiver = require("archiver");
const path = require("path");

const output = fs.createWriteStream(path.resolve(__dirname, "../sr5.zip"));
const archive = archiver("zip");

archive.on("error", function (err) {
  throw err;
});

// pipe archive data to the output file
archive.pipe(output);

// append files from a sub-directory and naming it `new-subdir` within the archive
archive.directory(path.resolve(__dirname, "../dist/"), "./");

//
archive.finalize();
