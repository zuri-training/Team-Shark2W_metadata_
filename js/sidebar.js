class Sidebar extends HTMLElement {
	static get observedAttributes() {
		return ['checkResized', 'attachId', 'markDifference', 'computedHeight'];
	}
	constructor() {
		super();
		this.computedheight = null;
		if (this.getAttribute('computedHeight')) {
			if (this.getAttribute('attachId')) {
				const getAttachedElement = document.getElementById(
					this.getAttribute('attachId')
				);
				let computedElemHeight = getComputedStyle(getAttachedElement).height;
				if (this.getAttribute('markDifference')) {
					this.computedheight = `calc(${computedElemHeight} - ${this.getAttribute(
						'markDifference'
					)})`;
				} else {
					this.computedheight = computedElemHeight;
				}
			} else {
				throw new Error('attachId attribute is required to compute the value');
			}
		} else {
			this.computedheight = '100%';
		}

		const sidebarTemplate = document
			.getElementById('sidebar-template')
			.content.cloneNode(true);

		const style = document.createElement('style');
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(sidebarTemplate);
		this.shadowRoot.appendChild(style);
	}

	connectedCallback() {
		this.updateStyles();
		this.addEventMethod();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.updateStyles();
	}

	addEventMethod() {
		const getElem = this.shadowRoot.getElementById('side-bar-container');
		const getAllDivs = getElem.querySelectorAll('div');
		getAllDivs.forEach((elem) => {
			elem.onclick = () => {
				const getSidebarElem = document.querySelector('sidebar-modal');
				getSidebarElem.removeAttribute('open');
			};
		});
	}

	updateStyles() {
		this.shadowRoot.querySelector('style').textContent = `
    .side-bar {
      display: grid;
      justify-content: center;
      align-items: flex-start;
      grid-template-columns: auto;
      row-gap: 2rem;
      padding: 2rem;
    }
    .side-bar {
      height: ${this.computedheight};
      background-color: #0A337A;
    }
    .side-bar div{
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .side-bar div img {
      width: 2.7rem;
      height: 2.7rem;
    }
    .side-bar .logo {
      display: grid;
      grid-template-columns: auto;
      width: 100% !important;
    }
    .side-bar .logo img {
      width: 6rem;
      height: 5rem;
    }
    .fa-th-large {
      font-size: 2.7rem;
      color: #FB8500;
    }

    @media (0px <= width <= 991px) {
      .side-bar {
        display: ${this.hasAttribute('checkResized') ? 'block' : 'none'};
        row-gap: 3rem;
      }
      .side-bar img {
        width: 8rem;
        height: 5rem;
      }
      .side-bar div img {
        width: 2rem;
        height: 2rem;
      }
      .side-bar div {
        margin-top: 2rem;
      }
    }
    `;
	}
}

customElements.define('side-bar', Sidebar);
