(function() {
  "use strict";

//boat
const cursorImage = document.getElementById('cursor-image');
const heroSection = document.getElementById('hero');

heroSection.addEventListener('click', (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;

  cursorImage.style.left = xPos + 'px';
  cursorImage.style.top = yPos + 'px';
  cursorImage.style.opacity = "1"
});


})()


