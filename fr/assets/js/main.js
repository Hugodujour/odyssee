(function() {
  "use strict";


  


    /**
   * Preloader
   */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      });
    }

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  






  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight


    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset +3 ,
      behavior: 'smooth'
    })
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if (!isMobile()) {
    //place script you don't want to run on mobile here
      console.log('Not mobiled')

      /* 
  * Main color
  */

  let main = select('#main')
  const la = 1350
  const lb = 2550
  const lc = 3800
  const ld = 5600





  






  

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








  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });
  
    /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();
    }
})()

document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Disable the submit button
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;

  // Enable the submit button after 3 seconds
  setTimeout(function () {
    submitButton.disabled = false;
  }, 3000);

  // Submit the form
  this.submit();
});

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });