console.log('new')

// Variables to store the scroll position and rotation angle
let scrollPosition = 0;
let rotationAngle = 0;
let shouldRotate = true; // Flag to control rotation

// Variables for mouse and touch interaction
let isDragging = false;
let startDragX = 0;
let initialRotationAngle = 0;

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
  updateCarouselRotation();
}

// Function to continuously rotate the carousel
function continuousRotation() {
  if (shouldRotate) {
    // Get the current rotation angle
    const currentRotation = rotationAngle;

    // Update the rotation angle for the continuous rotation
    rotationAngle += 0.05; // Adjust the increment to control the continuous rotation speed

    // Apply the rotation angle to the carousel element
    updateCarouselRotation();

    // Schedule the next continuous rotation frame
    requestAnimationFrame(continuousRotation);
  }
}

// Add event listeners for mouse and touch interaction
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', handleDrag);
document.addEventListener('mouseup', endDrag);
carousel.addEventListener('touchstart', startTouch);
carousel.addEventListener('touchmove', handleTouch);
carousel.addEventListener('touchend', endTouch);

// Function to start dragging the carousel with the mouse
function startDrag(event) {
  isDragging = true;
  startDragX = event.clientX;
  initialRotationAngle = rotationAngle;
  stopCarouselRotation(); // Stop the carousel rotation when dragging starts
}

// Function to handle dragging the carousel with the mouse
function handleDrag(event) {
  if (isDragging) {
    const mouseDeltaX = event.clientX - startDragX;
    rotationAngle = initialRotationAngle + mouseDeltaX * 0.2; // Adjust the multiplier to control drag sensitivity
    updateCarouselRotation();
  }
}

// Function to end dragging the carousel with the mouse
function endDrag() {
  isDragging = false;
  resumeCarouselRotation(); // Resume carousel rotation when dragging ends
}

// Function to start dragging the carousel with touch
function startTouch(event) {
  isDragging = true;
  startDragX = event.touches[0].clientX;
  initialRotationAngle = rotationAngle;
  stopCarouselRotation(); // Stop the carousel rotation when dragging starts
}

// Function to handle dragging the carousel with touch
function handleTouch(event) {
  if (isDragging) {
    const touchDeltaX = event.touches[0].clientX - startDragX;
    rotationAngle = initialRotationAngle + touchDeltaX * 0.4; // Adjust the multiplier to control touch sensitivity
    updateCarouselRotation();
  }
}

// Function to end dragging the carousel with touch
function endTouch() {
  isDragging = false;
  resumeCarouselRotation(); // Resume carousel rotation when dragging ends
}

// Function to stop the carousel rotation on hover
function stopCarouselRotation() {
  shouldRotate = false;
}

// Function to resume the carousel rotation when the mouse leaves
function resumeCarouselRotation() {
  shouldRotate = true;
  continuousRotation();
}

// Function to update the carousel rotation
function updateCarouselRotation() {
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `rotateY(-${rotationAngle}deg)`;
}


//mobile toggle classic
const mobiled2 = document.getElementById('mobiled')
const animed2 = document.getElementById('animed2')
mobiled2.addEventListener('click', function () {
 animed2.classList.toggle('animed2')
})