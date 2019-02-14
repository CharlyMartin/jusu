import { getDataFrom } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const component = document.querySelector('#quote > app-block');
const lastId = 804;
const randomId = randomNumber(lastId);

getDataFrom('Quotes', randomId).then(function(data) {
  component.setAttribute('title', data[0].fields.Author);
  component.setAttribute('text', data[0].fields.Quote);
  // component.querySelector('.title').innerHTML = data[0].fields.Author;
  // component.querySelector('.text').innerHTML = data[0].fields.Quote;
  // console.log(component.querySelector('.title'));
})