/**
* Template Name: Squadfree
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

window.location.replace("http://www.vins-odyssee.com/fr");
(function() {
  "use strict";


  window.location.replace("http://www.vins-odyssee.com/fr");



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

  if(main) {

    const mainScrolled = () => {
      if (window.scrollY < la){
        callPro.classList.remove('call-pro')
        main.style.background = 'var(--main-color)'
        colored.style.background = "var(--sec-color)"
      } else if (window.scrollY >= la && window.scrollY < lb){
        main.style.background = 'var(--main-color-pro)'
        colored.style.background = "var(--sec-color-pro)"
        coloredMer.style.background ="var(--sec-color-pro)"
        callPro.classList.add('call-pro')
      } else if (window.scrollY >= lb && window.scrollY < lc) {
        
        main.style.background = 'var(--main-color-mer)'
        coloredMer.style.background ="var(--sec-color-mer)"
        coloredSau.style.background = "var(--sec-color-mer)"
      } else if (window.scrollY >= lc && window.scrollY < ld) {
        main.style.background = 'var(--main-color-sau)'
        coloredSau.style.background = ""
      } else {
        main.style.background = 'var(--main-color)'
      }
    }
    window.addEventListener('load', mainScrolled)
    onscroll(document, mainScrolled);
  }

  /* 
  * Head color
  */

  let head = select('#header')

  if(head) {
    let chevroned = select('#chevroned')
    const headScrolled = () => {
      if(window.scrollY <= 100){
        head.style.background = 'none'
        chevroned.style.background = "var(--main-color)"
        
      } else if (window.scrollY >= la && window.scrollY < lb){
        head.style.background = "var(--main-color-pro)"
        chevroned.style.background = "var(--main-color-pro)"
      } else if (window.scrollY >= lb && window.scrollY < lc) {
        head.style.background = 'var(--main-color-mer)'
        chevroned.style.background = "var(--main-color-mer)"
        // logoHeader.classList.remove('blacked')
        // navHeader.style.color = "white"
        // freng.style.color = "white"
        
      } else if (window.scrollY >= lc && window.scrollY < ld) {
        head.style.background = 'var(--main-color-sau)'
        chevroned.style.background = "var(--main-color-sau)"
        
      } else {
        head.style.background = 'var(--main-color)'
        chevroned.style.background = "var(--main-color)"
        
      }
    }
    window.addEventListener('load', headScrolled)
    onscroll(document, headScrolled);
  }


}

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let logoHeader = select('#logow')
  let navHeader = select('#navbar')
  let freng = select('#freng')
  let colored = select('.colored')
  let coloredMer = select('.colored-mer')
  let coloredSau = select('.colored-sau')
  let callPro = select('#callpro')
  let mobiled = select('#mobiled')
  let ody = select('#ody')
  
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        logoHeader.classList.add('blacked')
        navHeader.style.color = "black"
        freng.style.color = "black"
        mobiled.style.color = 'black';
        
      } else {
        selectHeader.classList.remove('header-scrolled')
        logoHeader.classList.remove('blacked')
        navHeader.style.color = "white"
        freng.style.color = "white"
        mobiled.style.color = 'white'
        
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /* 
  * Video scrolled pause
  */

  let vid = select('#bgvideo')
  if (vid) {
    const vidScrolled = () => {
      window.scrollY > 1 ? vid.play() : vid.play()
    }
    window.addEventListener('load', vidScrolled)
    onscroll(document, vidScrolled);
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