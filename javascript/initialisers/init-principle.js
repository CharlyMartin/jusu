import { getDataFrom, fetchFromId, getLastRecordId } from '../airtable/client.js';
import { randomNumber } from '../helpers/random-number.js';

const component = document.querySelector('#principle > app-block');

getLastRecordId('Principles')
  .then(id => getDataFrom('Principles', randomNumber(id)))
  .then(data => {
    component.setAttribute('text', data[0].fields.Principle);
    return data[0].fields.Author[0];
}).then(id => fetchFromId('Principles', id))
  .then(data => component.setAttribute('title', data.Name));