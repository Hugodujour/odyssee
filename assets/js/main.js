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



console.log('hey')


//mobile toggle main
const logow = document.getElementById('logow')
const heroed = document.getElementById('heroed')
const header = document.getElementById('header')

//mobile toggle classic
const mobiled = document.getElementById('mobiled')
const animed = document.getElementById('animed')
mobiled.addEventListener('click', function () {
 animed.classList.toggle('animed')
 heroed.classList.toggle('mained')
 logow.classList.toggle('blacked')
 header.classList.toggle('b-bot-black')
 mobiled.classList.toggle('blacked')

})

})()



