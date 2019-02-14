import { getDataFrom } from '../airtable/client.js';

const quoteBlock = document.querySelector('#quote > app-block');
// console.log (quoteBlock);

getDataFrom('Quotes').then(function(data) {
  const quote = data[0].fields.Quote;
  const author = data[0].fields.Author;
  console.log(quote, author);
})

// Make web comp empty and append child with callback from API call.