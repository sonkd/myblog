$(document).ready(function() {
  'use strict';

  var headerOverlay = $('.header__overlay'),
    menuList = $('.main-nav__box'),
    menuOpenIcon = $('.main-nav__open'),
    menuCloseIcon = $('.main-nav__close');


  /* =======================
  // Menu and Navigation
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass('visible');
    headerOverlay.addClass('visible');
  }

  function menuClose() {
    menuList.removeClass('visible');
    headerOverlay.removeClass('visible');
  }

  /* ================================
  // AOS - Animate On Scroll Library
  ================================ */
  AOS.init();


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });

  /* ============================
  // Scroll to top
  ============================ */
  const btnScrollToTop = document.querySelector(".top");

  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });


  /* ============================
  // Sticky Slider Navigation
  ============================ */

  class StickyNavigation {
	
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $('.et-hero-tab').click(function() { 
        self.onTabClick(event, $(this)); 
      });
      $(window).scroll(() => { this.onScroll(); });
      $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
    
    onResize() {
      if(this.currentId) {
        this.setSliderCss();
      }
    }
    
    checkTabContainerPosition() {
      let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if($(window).scrollTop() > offset) {
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
      } 
      else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
      }
    }
    
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.et-hero-tab').each(function() {
        let id = $(this).attr('href');
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if(this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
    
    setSliderCss() {
      let width = 0;
      let left = 0;
      if(this.currentTab) {
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.et-hero-tab-slider').css('width', width);
      $('.et-hero-tab-slider').css('left', left);
    }
    
  }
  
  new StickyNavigation();

  /* ============================
  // 3D gallery photo
  ============================ */
  Vue.component("photo-card", {
    template: `<a class="card"
                  :href="link"
                  target="_blank"
                  ref="card"
                  @mousemove="move"
                  @mouseleave="leave"
                  @mouseover="over">
                    <div class="reflection" ref="refl"></div>
                    <img :src="img"/>
              </a>`,
    props: ["img", "link"],
    mounted() {},
    data: () => ({
      debounce: null
    }),
    methods: {
      over() {
        const refl = this.$refs.refl;
        refl.style.opacity = 1;
      },
      leave() {
        const card = this.$refs.card;
        const refl = this.$refs.refl;
        card.style.transform = `perspective(500px) scale(1)`;
        refl.style.opacity = 0;
      },
      move() {
        const card = this.$refs.card;
        const refl = this.$refs.refl;
        const relX = (event.offsetX + 1) / card.offsetWidth;
        const relY = (event.offsetY + 1) / card.offsetHeight;
        const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
        const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
        card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;
        const lightX = this.scale(relX, 0, 1, 150, -50);
        const lightY = this.scale(relY, 0, 1, 30, -100);
        const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
        const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
        const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
        const lightShadeBlack = `rgba(0, 0, 0, 1)`;
        refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
      },
      scale: (val, inMin, inMax, outMin, outMax) => outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
    }
  });
  const app = new Vue({
    el: "#grid"
  });
  

});
