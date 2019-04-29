const baseUrl = 'https://api.airtable.com/v0';
const bases = {
  'Content': 'appB3NhaDjZBZ6g37',
}

const headers = {
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${process.env.AIRTABLE_API_KEY}`
  }
}

function getLastRecordId(table, baseName = 'Content') {
  const lastIdParams = {
    fields: 'fields[]=Id',
    sortField: 'sort[0][field]=Created',
    sortDirection: 'sort[0][direction]=desc',
    maxRecords: 'maxRecords=1'
  }

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