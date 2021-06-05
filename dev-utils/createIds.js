const { v4: uuidv4 } = require('uuid');

const paints = require('./data/paints/citadel');

const newStuff = paints.map(paint => ({ id: uuidv4(), ...paint }));

console.log(JSON.stringify(newStuff));