// import { getDataFrom, getLastRecordId } from '../airtable/client.js';
// import { randomNumber } from '../helpers/random-number.js';

// const component = document.querySelector('#principle > app-block');

// getLastRecordId('Principles')
//   .then(function(data) {
//     // Get the last Id from the Principles table
//     return data[0].fields.Id
//   })
//   .then(function(lastId) {
//     // Generate a randon number using this id as upper bound
//     const id = randomNumber(lastId);
//     // Fetching data associated to this id
//     return getDataFrom('Principles', id)
//   })
//   .then(function(data) {
//     // Updating component with data
//     const title = `${data[0].fields.Title} - ${data[0].fields.Author}`
//     component.setAttribute('title', title);
//     component.setAttribute('text', data[0].fields.Principle);
//   })