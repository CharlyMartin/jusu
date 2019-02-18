import { airtableKey, tables } from './secret.js';

const headers = {
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${airtableKey}`
  }
}

function getLastRecordId(tableName, id = 1) {
  // const url = `https://api.airtable.com/v0/${tables[tableName]}/${tableName}?fields=["Id"]`;
  // return fetch(url, headers)
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function({ records }) {
  //   return records;
  // })
}

function getDataFrom(tableName, id = 1) {
  const url = `https://api.airtable.com/v0/${tables[tableName]}/${tableName}?filterByFormula=(Id=${id})`;

  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      return records;
      // then() returns a promise
    })
}

export { getDataFrom, getLastRecordId };