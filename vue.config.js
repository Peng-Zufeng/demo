const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  pages: {
    index: {
      entry: "src/main.js"
    }
  },
  lintOnSave: true,
  devServer: {
    proxy: "http://172.16.30.64:3000/mock/155/"
  },
  chainWebpack: config => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
    } else {
    }
  }
});
