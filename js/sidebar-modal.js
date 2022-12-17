class SidebarModal extends HTMLElement {
	static get observedAttributes() {
		return ['open'];
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.mediaQuery = window.matchMedia('(min-width: 991px)');
		if (this.mediaQuery.matches) {
			this.removeAttribute('open');
		}

		const style = document.createElement('style');
		const modal = document.createElement('div');
		modal.setAttribute('class', 'modal-container');
		const modalBody = modal.appendChild(document.createElement('div'));
		modalBody.setAttribute('class', 'modal-body');
		const fixedArea = modalBody.appendChild(document.createElement('div'));
		const close = modalBody.appendChild(document.createElement('span'));
		close.setAttribute('id', 'close');
		close.style.cssText = `
			position: absolute;
			top: 1.5rem;
			right: 2.5rem;
			font-size: 2rem;
			font-weight: bold;
			color: #fff;
		`;
		close.innerHTML = '&times;';
		fixedArea.setAttribute('class', 'fixed-container');
		fixedArea.style.cssText = `
			width: 13rem;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			background-color: #fff;
		`;
		fixedArea.innerHTML = '<slot></slot>';
		// const sidebar = fixedArea.appendChild(document.createElement('side-bar'));
		// fixed

		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(modal);
	}

	get open() {
		return this.hasAttribute('open');
	}

	set open(val) {
		if (val) {
			this.setAttribute('open', '');
		} else {
			this.removeAttribute('open');
		}
	}

	connectedCallback() {
		// this.updateStyles();
		this.mediaQuery.addEventListener('change', this.handleScreensChanged);
		this.attachOnClick();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// this.updateStyles();
	}

	attachOnClick() {
		const close = this.shadowRoot.getElementById('close');
		close.onclick = () => {
			this.removeAttribute('open');
		};
	}

	handleScreensChanged = (e) => {
		console.log('i was here');
		if (e.matches) this.removeAttribute('open');
	};

	updateStyles() {
		this.shadowRoot.querySelector('style').textContent = `
	    .modal-container {
	      display: ${this.hasAttribute('open') ? 'block' : 'none'};
	      position: absolute;
	      top: 0;
	      bottom: 0;
	      right: 0;
	      left: 0;
	      background-color: rgba(0, 0, 0, .5);
	      z-index: 10;
				height: 100vh;
				width: 100vw;
	    }

	  `;
	}
}

customElements.define('sidebar-modal', SidebarModal);
