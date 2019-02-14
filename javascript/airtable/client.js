import { airtableKey, tables } from './secret.js';

function getDataFrom(tableName, id = 1) {
  const headers = {
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${airtableKey}`
    }
  } 

  return fetch(`https://api.airtable.com/v0/${tables[tableName]}/${tableName}`, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      return records;
      // const data = new Promise(function(resolve) {
      //   resolve(records);
      // });
      // return data;
    })
}

export { getDataFrom };