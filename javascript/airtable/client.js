import { airtableKey, tables } from './secret.js';
const baseUrl = 'https://api.airtable.com/v0';

const headers = {
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${airtableKey}`
  }
}

const lastIdParams = {
  fields: 'fields[]=Id',
  sortField: 'sort[0][field]=Created',
  sortDirection: 'sort[0][direction]=desc',
  maxRecords: 'maxRecords=1'
}

function getLastRecordId(tableName) {
  const url = `${baseUrl}/${tables[tableName]}/${tableName}?${Object.values(lastIdParams).join('&')}`;
  
  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      return records;
    })
}

function getDataFrom(tableName, id = 1) {
  const url = `${baseUrl}/${tables[tableName]}/${tableName}?filterByFormula=(Id=${id})`;

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