import { getDataFrom, fetchFromId, getLastRecordId } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const component = document.querySelector('#quote > app-block');

getLastRecordId('Quotes')
  .then(id => getDataFrom('Quotes', randomNumber(id)))
  .then(data => {
    component.setAttribute('text', data[0].fields.Quote);
    return data[0].fields.Author[0];
}).then(id => fetchFromId('Quotes', id))
  .then(data => component.setAttribute('title', data.Name));