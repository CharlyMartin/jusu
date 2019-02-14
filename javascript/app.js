import { AppBlock } from './components/block.js';
import './components/init-quote.js';
import './components/init-principle.js';
import './components/init-counter.js';
import { runCounter } from './components/init-counter.js';

window.customElements.define('app-block', AppBlock);

window.setInterval(runCounter, 100);

// To-Do
// Change style based on size attributes
// Ask birthday in a prompt window and store locally
// Create 1 quote & principle / day, no more. Even if page refreshes.
// Have a read-only API key from airtable