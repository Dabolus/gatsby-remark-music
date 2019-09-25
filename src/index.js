const { JSDOM } = require('jsdom');
const dom = new JSDOM();
global.Element = dom.window.Element;
global.CharacterData = dom.window.CharacterData;
global.DocumentType = dom.window.DocumentType;
global.window = dom.window;
global.document = dom.window.document;
const visit = require('unist-util-visit');
const abc = require('abcjs');
const remarkMusic = require('remark-music');

const container = document.createElement('div');

module.exports = ({ markdownAST }, { color = '#000', ...params } = {}) => {
  visit(markdownAST, 'music', node => {
    node.type = 'html';
    abc.renderAbc(container, node.value, {
      responsive: 'resize',
      viewportHorizontal: true,
      viewportVertical: true,
      ...params,
    });
    node.value = container.innerHTML
      // Replace all the fill and stroke colors with user defined color
      .replace(/#000000/g, color)
      // Add color to text (which for some reason isn't set by abcjs)
      .replace(/<text/g, `<text fill="${color}"`);
  });

  return markdownAST;
};

module.exports.setParserPlugins = () => [remarkMusic];
