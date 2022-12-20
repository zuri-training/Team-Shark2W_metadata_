class DataDisplayRow extends HTMLElement {
	static get observedAttributes() {
		return ['first-column', 'second-column', 'no-border'];
	}
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		const templateContent = document.getElementById(
			'data-display-template'
		).content;
		const style = document.createElement('style');

		this.shadow.appendChild(style);
		this.shadow.appendChild(templateContent.cloneNode(true));
	}

	connectedCallback() {
		this.updateStyles();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.updateStyles();
	}

	updateStyles() {
		this.shadow.querySelector('style').textContent = `
			::slotted(*) {
				font-family: 'Poppins', sans-serif;
			}
			::slotted(img) {
				width: 2rem;
				height: rem;
			}
      .parent-container {
				width: 100%;
				border-bottom: ${this.hasAttribute('no-border') ? 'none' : '1px solid #000'} ;
				padding: 1rem 1rem 0.4rem;
				margin-bottom: 1rem;
        display: grid;
				box-sizing: border-box;
				font-family: 'Poppins', sans-serif;
        grid-template-columns: ${
					this.hasAttribute('first-column')
						? this.getAttribute('first-column')
						: 'auto'
				} ${
			this.hasAttribute('second-column')
				? this.getAttribute('second-column')
				: 'auto'
		}
      }
			.first-container, .second-container {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
    `;
	}
}

customElements.define('data-display-row', DataDisplayRow);
