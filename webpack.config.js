const path = require("path");
module.exports = {
    entry: "./script.js",
    output: {
        filename: `build.js`,
        path: path.resolve(__dirname, "dist"), // bundled files will be physically saved here
        /**
         * bundled files will be served from here, can be different than output.path
         * build.js will now be served at output/build.js and not at dist/build.js
         */
        publicPath: '/output/',
    },
    resolve: {
        alias: {
            folder1: path.resolve(__dirname, "src", "folder1"),
            "design-patterns": path.resolve(__dirname, "src", "design-patterns"),
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // index.html should be present in this folder
            publicPath: "/home" // Used to serve index.html from a different path (localhost:8080/home)
        },
    },
    optimization: {
        sideEffects: true,
    }
}