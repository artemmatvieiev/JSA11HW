const header = require('./modules/header/header.js')();
const main = require('./modules/main/main.js')();
const footer = require('./modules/footer/footer.js')();

const content = header.outerHTML + main.outerHTML + footer.outerHTML;
document.body.innerHTML = content;


