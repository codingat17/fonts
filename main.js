let images = [
  'altar.jpg', // Add your image paths here
  'g8.jpg',
  'g1.jpg',
  'g9.jpg'
];

let currentIndex = 0;
let imageElement = document.getElementById('slider-image');

// Function to change the image
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to first image after the last one
  imageElement.src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);



