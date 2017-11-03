const builder = require('../../elementBuilder');
require('./list.scss');

module.exports = () => {
  let content = '';
  for (let i = 1; i <= 20; i++ ) {
    content += `<li class="width${i}">item${i}</li>`
  }
  return builder('ul', content, 'list');
};