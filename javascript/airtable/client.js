import { airtableKey, bases } from './secret.js';
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

function getLastRecordId(table, baseName = 'Content') {
  const url = `${baseUrl}/${bases[baseName]}/${table}?${Object.values(lastIdParams).join('&')}`;
  
  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      return records[0].fields.Id;
    })
}

function getDataFrom(table, id = 1, baseName = 'Content') {
  const url = `${baseUrl}/${bases[baseName]}/${table}?filterByFormula=(Id=${id})`;

  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ records }) {
      return records;
      // then() returns a promise
    })
}

function fetchFromId(table, id, baseName = 'Content') {
  const url = `${baseUrl}/${bases[baseName]}/${table}/${id}`;

  return fetch(url, headers)
    .then(function(response) {
      return response.json();
    })
    .then(function({ fields }) {
      return fields;
    })
}

export { getDataFrom, getLastRecordId, fetchFromId };