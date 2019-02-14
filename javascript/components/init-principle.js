import { getDataFrom } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const quoteBlock = document.querySelector('#principle > app-block');
const lastId = 4;
const randomId = randomNumber(lastId);

getDataFrom('Principles', randomId)
  .then(function(data) {
    quoteBlock.setAttribute('title', data[0].fields.Title);
    quoteBlock.setAttribute('text', data[0].fields.Principle);
  })