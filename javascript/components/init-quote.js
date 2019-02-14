import { getDataFrom } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const quoteBlock = document.querySelector('#quote > app-block');
const lastId = 804;
const randomId = randomNumber(lastId);

getDataFrom('Quotes', randomId).then(function(data) {
  quoteBlock.setAttribute('title', data[0].fields.Author);
  quoteBlock.setAttribute('text', data[0].fields.Quote);
  // quoteBlock.querySelector('.title').innerHTML = data[0].fields.Author;
  // quoteBlock.querySelector('.text').innerHTML = data[0].fields.Quote;
  // console.log(quoteBlock.querySelector('.title'));
})