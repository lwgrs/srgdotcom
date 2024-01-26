const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const path = require('path');


module.exports = function (eleventyConfig) {
  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  
  let markdownLib =  markdownIt(options).use(markdownItFootnote);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(pluginNavigation);  
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/_data");
  eleventyConfig.addWatchTarget("./src/css/_data");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/images");
  eleventyConfig.addPassthroughCopy("./src/icons");
  eleventyConfig.addWatchTarget("./src/icons/");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
