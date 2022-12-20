class UploadDetails extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		const currentDate = new Date();
		const formedDate = `${currentDate.getUTCDate()}/${currentDate.getUTCMonth()}/${currentDate.getFullYear()}`;
		this.data = {
			uploadDate: formedDate,
			updatedBy: 'Mercy Mrabure',
			name: 'image.jpg',
			uploadData: `${formedDate} - ${currentDate.getUTCHours()} : ${currentDate.getUTCMinutes()}`,
			fileSize: '1024kb/jpeg',
			imgSource: 'images/user.png',
		};

		const style = document.createElement('style');
		style.textContent = `
      .upload-container {
        display: grid; 
        grid-column-template: auto;
        padding: 1rem;
        border: 1px solid #000;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      .image-container img {
        width: 100%;
        height: 14rem
      }

      .data-header {
        border-bottom: 1px solid #000;
				padding: 2rem 1rem 0.4rem;
				margin-bottom: 1rem;
        color: #262728;
      }

      .buttons-container {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 0.5rem;
      }

    `;

		const container = document.createElement('div');
		container.setAttribute('class', 'upload-container');

		const uploadDetails = container.appendChild(
			document.createElement('data-display-row')
		);
		uploadDetails.setAttribute('first-column', '70%');
		uploadDetails.setAttribute('second-column', '30%');
		uploadDetails.setAttribute('no-border', 'true');
		const firstUploadSlot = uploadDetails.appendChild(
			document.createElement('span')
		);
		firstUploadSlot.setAttribute('slot', 'first-data');
		firstUploadSlot.textContent = `image - ${this.data.uploadDate}`;
		const secondUploadSlot = uploadDetails.appendChild(
			document.createElement('img')
		);
		secondUploadSlot.setAttribute('slot', 'second-data');
		secondUploadSlot.setAttribute('src', 'images/editfile.png');
		secondUploadSlot.setAttribute('alt', 'edit');

		const imageContainer = container.appendChild(document.createElement('div'));
		imageContainer.setAttribute('class', 'image-container');
		const img = imageContainer.appendChild(document.createElement('img'));
		img.setAttribute('src', this.data.imgSource);
		img.setAttribute('alt', 'user');

		const dataHeader = container.appendChild(document.createElement('div'));
		dataHeader.setAttribute('class', 'data-header');
		dataHeader.textContent = 'Data Details';

		const nameDetails = container.appendChild(
			document.createElement('data-display-row')
		);
		nameDetails.setAttribute('first-column', '50%');
		nameDetails.setAttribute('second-column', '50%');
		const nameFirstUploadSlot = nameDetails.appendChild(
			document.createElement('span')
		);
		nameFirstUploadSlot.setAttribute('slot', 'first-data');
		nameFirstUploadSlot.textContent = `Name`;
		const nameSecondUploadSlot = nameDetails.appendChild(
			document.createElement('span')
		);
		nameSecondUploadSlot.setAttribute('slot', 'second-data');
		nameSecondUploadSlot.textContent = this.data.name;

		const updatedByDetails = container.appendChild(
			document.createElement('data-display-row')
		);
		updatedByDetails.setAttribute('first-column', '50%');
		updatedByDetails.setAttribute('second-column', '50%');
		const updatedByFirstUploadSlot = updatedByDetails.appendChild(
			document.createElement('span')
		);
		updatedByFirstUploadSlot.setAttribute('slot', 'first-data');
		updatedByFirstUploadSlot.textContent = `Updated by`;
		const updatedBySecondUploadSlot = updatedByDetails.appendChild(
			document.createElement('span')
		);
		updatedBySecondUploadSlot.setAttribute('slot', 'second-data');
		updatedBySecondUploadSlot.textContent = this.data.updatedBy;

		const uploadDataDetails = container.appendChild(
			document.createElement('data-display-row')
		);
		uploadDataDetails.setAttribute('first-column', '50%');
		uploadDataDetails.setAttribute('second-column', '50%');
		const uploadDataFirstUploadSlot = uploadDataDetails.appendChild(
			document.createElement('span')
		);
		uploadDataFirstUploadSlot.setAttribute('slot', 'first-data');
		uploadDataFirstUploadSlot.textContent = `Upload data`;
		const uploadDataSecondUploadSlot = uploadDataDetails.appendChild(
			document.createElement('span')
		);
		uploadDataSecondUploadSlot.setAttribute('slot', 'second-data');
		uploadDataSecondUploadSlot.textContent = this.data.uploadData;

		const fileTypeDetails = container.appendChild(
			document.createElement('data-display-row')
		);
		fileTypeDetails.setAttribute('first-column', '50%');
		fileTypeDetails.setAttribute('second-column', '50%');
		const fileTypeDetailsUploadSlot = fileTypeDetails.appendChild(
			document.createElement('span')
		);
		fileTypeDetailsUploadSlot.setAttribute('slot', 'first-data');
		fileTypeDetailsUploadSlot.textContent = `File Size and Type`;
		const fileTypeSecondUploadSlot = fileTypeDetails.appendChild(
			document.createElement('span')
		);
		fileTypeSecondUploadSlot.setAttribute('slot', 'second-data');
		fileTypeSecondUploadSlot.textContent = this.data.fileSize;

		const buttonDiv = container.appendChild(document.createElement('div'));
		buttonDiv.setAttribute('class', 'buttons-container');
		const button1 = buttonDiv.appendChild(
			document.createElement('button-component')
		);
		button1.setAttribute('class', 'btn-primary');
		button1.setAttribute('value', 'Save');
		const button2 = buttonDiv.appendChild(
			document.createElement('button-component')
		);
		button2.setAttribute('value', 'Cancel');

		shadow.appendChild(style);
		shadow.appendChild(container);
	}
}

customElements.define('upload-details', UploadDetails);
