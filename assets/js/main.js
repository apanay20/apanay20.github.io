/**
* Template Name: MyResume - v4.7.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/**
  * Dark Mode ----------------------------------------------
*/

// Select the button
const darkToggle = document.querySelector("#darkToggleBtn");
// Select the stylesheet <link>
var lightTheme = document.querySelector("#css_light");
var darkTheme = document.querySelector("#css_dark");

var darkToggleIcon = darkToggle.children.item(0);
var cyensLogos = document.getElementsByClassName('cyensLogo');

if(window.matchMedia && ((window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') !== 'light') || localStorage.getItem('theme') === 'dark')){
  darkTheme.disabled = false;
  lightTheme.disabled = true;
  darkToggleIcon.classList.remove('bx-moon');
  darkToggleIcon.classList.add('bx-sun');
  for (var i = 0; i < cyensLogos.length; i++) {
    var item = cyensLogos[i];  
    item.src = "assets/img/cyensWhite.png";
  }
}else{
  darkTheme.disabled = true;
  lightTheme.disabled = false;
  darkToggleIcon.classList.remove('bx-sun');
  darkToggleIcon.classList.add('bx-moon');
  for (var i = 0; i < cyensLogos.length; i++) {
    var item = cyensLogos[i];  
    item.src = "assets/img/cyens.png";
  }
}

/**
  * Resume Item Showo More ----------------------------------------------
*/
function resumeShow(element){
  const parentDiv = element.parentNode;
  parentDiv.classList.add("show");
  element.style.display = "none";
}

function resumeHide(element){
  const parentDiv = element.parentNode;
  parentDiv.childNodes[1].style.display = "block";
  parentDiv.classList.remove("show");
}

// Listen for a click on the button
darkToggle.addEventListener("click", function(e) {
  e.preventDefault();
  if (lightTheme.disabled == false) {
    darkTheme.disabled = false;
    lightTheme.disabled = true;  
    darkToggleIcon.classList.remove('bx-moon');
    darkToggleIcon.classList.add('bx-sun');
    for (var i = 0; i < cyensLogos.length; i++) {
      var item = cyensLogos[i];  
      item.src = "assets/img/cyensWhite.png";
    }
    localStorage.setItem('theme', 'dark');
  } else {
    darkTheme.disabled = true;
    lightTheme.disabled = false;
    darkToggleIcon.classList.remove('bx-sun');
    darkToggleIcon.classList.add('bx-moon');
    for (var i = 0; i < cyensLogos.length; i++) {
      var item = cyensLogos[i];  
      item.src = "assets/img/cyens.png";
    }
    localStorage.setItem('theme', 'light');
  }
  return false;
});


$(".show-more a").on("click", function() {
  var $this = $(this); 
  var $content = $this.parent().prev("div.content");
  var linkText = $this.text().toUpperCase();    
  
  if(linkText === "SHOW MORE"){
      linkText = "Show Less";
      $content.switchClass("hideContent", "showContent", 400);
  } else {
      linkText = "Show More";
      $content.switchClass("showContent", "hideContent", 400);
  };

  $this.text(linkText);
});


// Image enalarge modal
//-----------------------
// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modalCaption");

function enlargeImage(src, alt){
  modal.style.display = 'block';
  modalImg.src = src;
  captionText.innerHTML = alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

/**
  * End Mine ----------------------------------------------
*/

(function() {
  "use strict";

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
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
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
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
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
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

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
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()