const dropArea = document.getElementById('dropArea');
const imageContainer = document.getElementById('imageContainer');

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('highlight');

  const file = e.dataTransfer.files[0];

  if (file && file.type.startsWith('image')) {
    const reader = new FileReader();
    reader.onload = function() {
      const image = document.createElement('img');
      image.src = reader.result;

      // Remove any existing images before adding the new one
      while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
      }

      imageContainer.appendChild(image);
      dropArea.style.display = 'none'; // Hide the drop area
    };
    reader.readAsDataURL(file);
  }
});



// const p11Button = document.querySelector('.car .p11');
// const p22Button = document.querySelector('.car .p22');

// p11Button.addEventListener('click', function() {
//   p11Button.classList.toggle('clicked');
//   p22Button.classList.remove('clicked');
// });

// p22Button.addEventListener('click', function() {
//   p22Button.classList.toggle('clicked');
//   p11Button.classList.remove('clicked');
// });