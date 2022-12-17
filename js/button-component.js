class ButtonComponent extends HTMLElement {
	static get observedAttributes() {
		return ['value', 'class'];
	}
	constructor() {
		super();
		this.button = document.createElement('button');
		this.shadow = this.attachShadow({ mode: 'open' });
		const style = document.createElement('style');

		this.shadow.appendChild(style);
		this.shadow.appendChild(this.button);
	}

	connectedCallback() {
		this.updateProperties();
		this.updateStyles();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.updateProperties();
		this.updateProperties();
	}

	updateStyles() {
		this.shadow.querySelector('style').textContent = `
      .btn {
        padding: 0.8rem 1.2rem;
        outline: none;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 1rem;
				color: #000;
				background-color: #fff;
				margin: 1rem;
      }

      .btn-primary {
        background-color: #0C4BB7;
				color: #fff;
				border: none
      }
    `;
	}

	updateProperties() {
		this.button.setAttribute('class', `btn ${this.getAttribute('class')}`);
		if (
			this.getAttribute('value') instanceof Element ||
			this.getAttribute('value') instanceof Document
		) {
			this.button.innerHTML = this.getAttribute('value');
		} else {
			this.button.textContent = this.getAttribute('value');
			this.button.setAttribute('value', this.getAttribute('value'));
		}
	}
}
customElements.define('button-component', ButtonComponent);
