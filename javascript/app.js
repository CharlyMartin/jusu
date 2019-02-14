import { AppBlock } from './components/block.js';
import { runCounter } from './components/init-counter.js';

import './components/init-quote.js';
import './components/init-principle.js';

window.customElements.define('app-block', AppBlock);

window.setInterval(runCounter, 100);

// To-Do
// Change style based on size attributes
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks

// Ask birthday in a prompt window and store locally

// Create 1 quote & principle / day, no more. Even if page refreshes.

// Have a read-only API key from airtable