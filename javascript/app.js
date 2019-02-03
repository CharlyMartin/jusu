import { getDataFrom } from './airtable.js';

// console.log(getDataFrom);
getDataFrom('Quotes').then(function(data) {
    console.log(data);
  })