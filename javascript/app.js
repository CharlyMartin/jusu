import { AppBlock } from './components/block.js';

import { setText, setTitle } from './initialisers/init-counter.js';
import './initialisers/init-quote.js';
import './initialisers/init-principle.js';

window.customElements.define('app-block', AppBlock);

window.setInterval(setText, 100);
setTitle();


// To-Do
// Create 1 quote & principle / day, no more. Even if page refreshes.

// Redesign
  // Add pattern in the background (Make padding bigger)
  // Add loader in quote and principle

// Ask birthday in a prompt window and store locally

// Deploy on netlify

// Have a read-only API key from airtable




// DONE ///////////////////
// Redraw layout. 7 * 7 
  // principle is 4 wide / 7 high
  // quote is 3 wide / 4 high
  // counter is 3 wide / 3 high

// Change style based on size attributes
  // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks

// Make the last id programmatically set, not hard coded
  // 1. Find what the last inserted record is thanks to the created field
  // 2. Get the id from that
  // 3. Generate a random ID from 1 and that id.
  // 4. Inject the random id in the fetch request
  // 5. Exclude empty field NOT({Author} = ''). Only common field to both tables.
  // => Import Airtable.js to do so