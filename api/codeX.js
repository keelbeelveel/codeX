// Script modified: Wed July 15, 2020 @ 03:39:32 EDT
// Private


// Public
module.exports = engine;
async function engine(data) {
    const hijs = require('highlight.js');
    return hijs.highlightAuto(data).value;

}

// engine.config()