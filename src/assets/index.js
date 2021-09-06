const fs = require('fs');

const list = fs.readdirSync('./audio/alphabet/en');

const alphabet = list.reduce((obj, letter) => {
    obj[letter[0]] =  {
        en: {text: letter[0], audio: `audio/alphabet/en/${letter}`},
        pt: {text: letter[0], audio: `audio/alphabet/pt/${letter}`}
    };
    return obj;
}, {});

fs.writeFileSync('./text/alphabet.json', JSON.stringify(alphabet, null, 4));