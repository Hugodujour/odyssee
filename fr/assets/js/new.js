console.log('new')

  //carroussel
// Variables to store the scroll position and rotation angle
let scrollPosition = 0;
let rotationAngle = 0;
let shouldRotate = true; // Flag to control rotation

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);

// Start the continuous rotation animation
continuousRotation();

// Function to handle the scroll event
function handleScroll() {
  // Update the scroll position
  scrollPosition = window.scrollY;

  // Update the rotation angle based on the scroll position
  rotationAngle = scrollPosition * 0.2; // Adjust the multiplier to control the rotation speed

  // Apply the rotation angle to the carousel element
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `rotateY(-${rotationAngle}deg)`;
}

// Function to continuously rotate the carousel
function continuousRotation() {
  if (shouldRotate) {
    // Get the current rotation angle
    const currentRotation = rotationAngle;

    // Update the rotation angle for the continuous rotation
    rotationAngle += 0.05; // Adjust the increment to control the continuous rotation speed

    // Apply the rotation angle to the carousel element
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `rotateY(-${rotationAngle}deg)`;

    // Schedule the next continuous rotation frame
    requestAnimationFrame(continuousRotation);
  }
}

// Add event listeners for hover on carousel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mousedown', stopCarouselRotation);
carousel.addEventListener('mouseup', resumeCarouselRotation);

// Function to stop the carousel rotation on hover
function stopCarouselRotation() {
  shouldRotate = false;
}

// Function to resume the carousel rotation when the mouse leaves
function resumeCarouselRotation() {
  shouldRotate = true;
  continuousRotation();
}