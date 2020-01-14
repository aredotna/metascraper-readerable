"use strict";

const { memoizeOne } = require("@metascraper/helpers");

const {
  isProbablyReaderable
} = require("./node_modules/readability/Readability-readerable");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();

const readerable = memoizeOne(($, url) => {
  const dom = new JSDOM($.html(), { virtualConsole, url }).window.document;
  return isProbablyReaderable(dom);
});

module.exports = () => {
  return {
    readerable: ({ htmlDom, url }) => readerable(htmlDom, url)
  };
};
