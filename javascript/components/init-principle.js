import { getDataFrom } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const component = document.querySelector('#principle > app-block');
const lastId = 4;
const randomId = randomNumber(lastId);

getDataFrom('Principles', randomId)
  .then(function(data) {
    const title = `${data[0].fields.Title} - ${data[0].fields.Author}`
    component.setAttribute('title', title);
    component.setAttribute('text', data[0].fields.Principle);
  })