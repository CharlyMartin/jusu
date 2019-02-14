class AppBlock extends HTMLElement {
  constructor() {
    super();
    // Calling the constructor() of HTMLElement

    const template = document.querySelector('template');
    const shadowRoot = this.attachShadow({mode: 'open'})
    // Using instances as roots of Shadow DOM
    
    shadowRoot.appendChild(template.content.cloneNode(true));
    // Using an HTML fragent and cloning for each instance

    this.title = this.getAttribute('title');
    this.text = this.getAttribute('text');

    shadowRoot.querySelector('h2').innerText = this.title;
    shadowRoot.querySelector('p').innerText = this.text;
    // Using attributes to update the content of the component;
  }

  static get observedAttributes() { return ['title', 'text']; };
  // This is listening to changes in the instances' attributes

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(name, oldValue, newValue);
  }

  connectedCallback() {
    console.log('App Block added to the DOM.', this.title);
    
  }

  disconnectedCallback() {
    console.log('App Block removed from the DOM.');
  }
}

export { AppBlock };