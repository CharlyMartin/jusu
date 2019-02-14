class AppBlock extends HTMLElement {
  constructor() {
    // Calling the constructor() of HTMLElement
    super();

    // Using instances as roots of Shadow DOM
    this.root = this.attachShadow({mode: 'open'})
    
    // Using an HTML fragent and cloning for each instance:
    const template = document.querySelector('template');    
    this.root.appendChild(template.content.cloneNode(true));
    

    // Web Component's attributes:
    this.title = this.getAttribute('title');
    this.text = this.getAttribute('text');

    // HTML elements from the template:
    this.header = this.root.querySelector('.title');
    this.paragraph = this.root.querySelector('.text');
  }

  static get observedAttributes() {
    return ['title', 'text'];
    // By default custom elements do not listen to changes.
    // This is listening to changes in the instances' attributes.
  }

  init() {
    this.header.innerText = this.title;
    this.paragraph.innerText = this.text;
    // Using attribute values to fill the content of the component's children;
  }

  updateElement(el, newVal) {
    el.innerText = newVal;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(`${name} attribute changed`);

    if (name === 'title') {
      this.updateElement(this.header, newValue);
    };

    if (name === 'text') {
      this.updateElement(this.paragraph, newValue);
    };
  }

  connectedCallback() {
    console.log(`${this.title} added to the DOM.`);
    this.init();
  }

  disconnectedCallback() {
    console.log(`${this.title} removed from the DOM.`);
  }
}

export { AppBlock };