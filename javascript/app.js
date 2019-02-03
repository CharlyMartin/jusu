import { getDataFrom } from './airtable.js';

// console.log(getDataFrom);
getDataFrom('Principles').then(function(data) {
    console.log(data);
  })