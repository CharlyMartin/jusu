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

  const url = `https://api.airtable.com/v0/${tables[tableName]}/${tableName}?filterByFormula=(Id = '${id}')`;
  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      console.log(records);
      return records;
      // const data = new Promise(function(resolve) {
      //   resolve(records);
      // });
      // return data;
    })
}

export { getDataFrom };