const builder = require('../elementBuilder');
const theses = require('./theses/theses.js')();
const list = require('./list/list.js')();

module.exports = () => {
  const content = theses.outerHTML + list.outerHTML;
  return builder('main', content, 'main');
};