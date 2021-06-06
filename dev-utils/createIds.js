const { v4: uuidv4 } = require('uuid');
const chunk = require('lodash/chunk');

const paints = require('../src/data/paints/citadel.js');

const newStuff = paints.map((paint) => {
  const rgb = chunk(paint.rgb.split(','), 3);

  return ({ id: uuidv4(), ...paint, rgb });
});

console.log(JSON.stringify(newStuff));

/**
 * this is just a utility function I used to generate the initial data
 * and help seed new data to the data files, don't pay this any mind.
 */
