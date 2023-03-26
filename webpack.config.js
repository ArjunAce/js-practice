const path = require("path");
module.exports = {
    entry: "./script.js",
    output: {
        filename: `build.js`,
        path: path.resolve(__dirname, "output"),
    },
    resolve: {
        alias: {
            folder1: path.resolve(__dirname, "src", "folder1"),
            "design-patterns": path.resolve(__dirname, "src", "design-patterns"),
        }
    }
}