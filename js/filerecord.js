class FileRecord extends HTMLElement {
	constructor() {
		super();

		this.data = [
			{ name: 'crs', type: 'jpeg', size: '3.6kb' },
			{ name: 'via', type: 'pdf', size: '3.6kb' },
			{ name: 'mrs', type: 'csv', size: '3.6kb' },
			{ name: 'papa', type: 'json', size: '3.6kb' },
		];

		const shadow = this.attachShadow({ mode: 'open' });
		const fileRecordContainer = document.createElement('div');
		fileRecordContainer.setAttribute('class', 'file-record-container');
		const fileRecord = fileRecordContainer.appendChild(
			document.createElement('div')
		);
		fileRecord.setAttribute('class', 'file-record');
		fileRecord.textContent = 'file records';
		const style = document.createElement('style');
		const table = document.createElement('table');
		style.textContent = ` 
      .file-record-container {
        grid-column-end: span 2;
        font-family: 'Poppins', sans-serif;
      }
      .file-record {
        display: grid;
        padding: 1.5rem;
        font-size: 1.5rem;
        text-transform: capitalize;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        border-bottom: none;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 3rem;
      }

      table thead {
        background-color: #0A337A;
        color: #fff;
      }

      table thead th {
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1.5rem 0;
        border: none;
      }

      table tbody tr {
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }

      table tbody tr td {
        text-align: center;
        padding: 1.5rem;
        border-bottom: 1px solid #000;
      }

      tr td span.serial-number {
        padding: 0.4rem 0.8rem;
        background-color: #FB8500;
        color: #FFFFFF;
        border-radius: 5px;
      }

      tr td span.file-type {
        padding: 0.4rem 0.8rem;
        background-color: #000;
        color: #FFFFFF;
        border-radius: 5px;
      }

      tr td img {
        width: 0.9rem;
        height: 0.9rem;
      }

      @media (0px <= width <= 991px) {
      .file-record {
        grid-column-end: span end;
        padding: 1rem;
        font-size: var(--small-font-size);
      }

      table thead th {
        text-transform: capitalize;
        font-size: var(--small-font-size);
        font-weight: 400;
        padding: 1rem;
        border: none;
      }
      table tbody tr td {
        padding: 1rem;
      }
      tr td span.serial-number {
        padding: 0.3rem 0.6rem;
      }
      tr td span.file-type {
        padding: 0.3rem 0.6rem;
      }
      tr td img {
        width: 0.55rem;
        height: 0.55rem;
      }
    }

    `;

		if (this.hasAttribute('heading')) {
			const thead = table.appendChild(document.createElement('thead'));
			const thtr = thead.appendChild(document.createElement('tr'));
			const heading = this.getAttribute('heading').split(' ');
			if (Array.isArray(heading)) {
				const th = document.createElement('th');
				th.textContent = 'sn';
				thtr.appendChild(th);
				heading.forEach((item) => {
					const th = document.createElement('th');
					th.textContent = item;
					thtr.appendChild(th);
				});
				const tbody = table.appendChild(document.createElement('tbody'));
				this.data.forEach((item, i) => {
					const tr = tbody.appendChild(document.createElement('tr'));
					const td = tr.appendChild(document.createElement('td'));
					const span = td.appendChild(document.createElement('span'));
					span.setAttribute('class', 'serial-number');
					span.textContent = i + 1;
					const values = Object.entries(item);
					values.forEach((value, j) => {
						const td = tr.appendChild(document.createElement('td'));
						if (value[0] === 'type') {
							const span = td.appendChild(document.createElement('span'));
							span.setAttribute('class', 'file-type');
							span.textContent = value[1];
						} else {
							td.textContent = value[1];
						}
						if (j == values.length - 1) {
							const tdd = tr.appendChild(document.createElement('td'));
							const img = tdd.appendChild(document.createElement('img'));
							img.setAttribute('src', 'images/arrow-up.png');
							img.setAttribute('alt', 'arrow-up');
						}
					});
				});
				fileRecordContainer.appendChild(table);
			} else
				throw new Error('Invalid heading: heading attribute must have a value');
		}
		shadow.appendChild(style);
		shadow.appendChild(fileRecordContainer);
	}

	get data() {
		return this._data;
	}

	set data(value) {
		this._data = value;
	}
}

customElements.define('file-record', FileRecord);
