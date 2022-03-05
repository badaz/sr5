const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("./sr5.zip");
const archive = archiver("zip");

archive.on("error", function (err) {
  throw err;
});

// pipe archive data to the output file
archive.pipe(output);

// append files from a sub-directory and naming it `new-subdir` within the archive
archive.directory("dist/", "./");

//
archive.finalize();
