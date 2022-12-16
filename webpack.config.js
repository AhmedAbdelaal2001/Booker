const path = require("path")

module.exports = {
    entry: {
        index: "./client_side/index.ts",
        DataTable: "./client_side/DataTable.ts",
        navbar: "./client_side/navbar.ts",
        login: "./client_side/login.ts",
        checkForToken: "./client_side/checkForToken.ts",
        home: "./client_side/home.ts"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist/public/client_side")
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    "ts-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },

    mode: 'development'
}