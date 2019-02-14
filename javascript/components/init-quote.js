import { getDataFrom } from '../airtable/client.js';

const quoteBlock = document.querySelector('#quote > app-block');
// console.log (quoteBlock);

getDataFrom('Quotes').then(function(data) {
  quoteBlock.setAttribute('title', data[0].fields.Author);
  quoteBlock.setAttribute('text', data[0].fields.Quote);
  // quoteBlock.querySelector('.title').innerHTML = data[0].fields.Author;
  // quoteBlock.querySelector('.text').innerHTML = data[0].fields.Quote;
  // console.log(quoteBlock.querySelector('.title'));
})

// Make web comp empty and append child with callback from API call.