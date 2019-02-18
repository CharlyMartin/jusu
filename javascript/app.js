import { AppBlock } from './components/block.js';
import { runCounter } from './components/init-counter.js';

import './components/init-quote.js';
import './components/init-principle.js';

window.customElements.define('app-block', AppBlock);

window.setInterval(runCounter, 100);
// To-Do
// Ask birthday in a prompt window and store locally

// Make the last id programmatically set, not hard coded
// 1. Find what the last inserted record is thanks to the created field
// 2. Get the id from that
// 3. Generate a random ID from 1 and that id.
// 4. Inject the random id in the fetch request
// 5. Exclude empty field NOT({Author} = ''). Only common field to both tables.

// Create 1 quote & principle / day, no more. Even if page refreshes.

// Have a read-only API key from airtable


// DONE ///////////////////
// Redraw layout. 7 * 7 
  // principle is 4 wide / 7 high
  // quote is 3 wide / 4 high
  // counter is 3 wide / 3 high

// Change style based on size attributes
  // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks