import { airtableApiKey } from './keys.js';

function getAirtableData(tableName) {
  const options = {
    mode: "cors", // no-cors, cors, *same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${airtableApiKey}`
    }
  } 

  fetch(`https://api.airtable.com/v0/appB3NhaDjZBZ6g37/${tableName}`, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
}

export { getAirtableData };

// https://api.airtable.com/v0/appB3NhaDjZBZ6g37/Quotes