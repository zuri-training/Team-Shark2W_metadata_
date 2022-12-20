const fileUpload = document.getElementById('file-upload-container');
const title = document.getElementById('drag-title');

fileUpload.addEventListener('dragover', (e) => {
	e.preventDefault();
});

fileUpload.addEventListener('drop', (e) => {
	e.preventDefault();
	const files = e.dataTransfer.files;
	title.textContent = `${files[0].name}`;
});

const inputFile = document.getElementById('file-upload');
inputFile.addEventListener('change', (e) => {
	e.preventDefault();
	const files = e.target.files;
	title.textContent = `${files[0].name}`;
});
