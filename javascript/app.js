import { getDataFrom } from './airtable.js';
import { AppBlock } from './block.js';

window.customElements.define('app-block', AppBlock);

const quote = document.querySelector('#quote app-block');
console.log(quote.content);



getDataFrom('Quotes').then(function(data) {
    console.log(data[0].fields.Quote, data[0].fields.Author);
  })


// Make web comp empty and append child with callback from API call.
  