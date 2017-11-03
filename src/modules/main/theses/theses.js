const builder = require('../../elementBuilder');
require('./theses.scss');

module.exports = () => {
  let content = '';
  for (let i = 1; i <= 4; i++ ) {
    content += `<div class="thesis${i}">Thesis${i}</div>`
  }
  return builder('div', content, 'theses');
};