import { airtableApiKey } from './keys.js';

function getDataFrom(tableName) {
  const options = {
    mode: "cors", // no-cors, cors, *same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${airtableApiKey}`
    }
  } 

  return fetch(`https://api.airtable.com/v0/appB3NhaDjZBZ6g37/${tableName}?maxRecords=200`, options)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      // const data = new Promise(function(resolve) {
      //   resolve(records);
      // });
      // return data;
      return records;
    })
}

export { getDataFrom };

// https://api.airtable.com/v0/appB3NhaDjZBZ6g37/Quotes