import { getDataFrom } from '../airtable/client.js';

const quoteBlock = document.querySelector('#principle > app-block');
// console.log (quoteBlock);

getDataFrom('Principles').then(function(data) {
  quoteBlock.setAttribute('title', data[0].fields.Title);
  quoteBlock.setAttribute('text', data[0].fields.Principle);
})