const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc",
  });
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("bundle.js");
  eleventyConfig.addPassthroughCopy("./assets/conduit_itc-webfont.woff");
  eleventyConfig.addPassthroughCopy("./assets/conduit_itc-webfont.woff2");
  eleventyConfig.addPassthroughCopy("images");
};
