const input = "src";
const output = "dist";
const pathPrefix = "/static";
const assetExts = "png,jpg,jpeg,svg,pdf,css,ico";

module.exports = function (eleventyConfig) {
  // copy as-is to output
  const assets = `${input}/**/*.{${assetExts}}`;
  eleventyConfig.addWatchTarget(assets);
  eleventyConfig.addPassthroughCopy(assets);

  // Return your Object options:
  return {
    dir: {
      input,
      output,
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
  }
};
