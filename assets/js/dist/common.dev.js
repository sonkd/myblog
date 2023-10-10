"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  'use strict';

  var headerOverlay = $('.header__overlay'),
      menuList = $('.main-nav__box'),
      menuOpenIcon = $('.main-nav__open'),
      menuCloseIcon = $('.main-nav__close');
  /* =======================
  // Menu and Navigation
  ======================= */

  menuOpenIcon.click(function () {
    menuOpen();
  });
  menuCloseIcon.click(function () {
    menuClose();
  });
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

  var btnScrollToTop = document.querySelector(".top");
  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });
  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  });
  /* ============================
  // Sticky Slider Navigation
  ============================ */

  var StickyNavigation =
  /*#__PURE__*/
  function () {
    function StickyNavigation() {
      var _this = this;

      _classCallCheck(this, StickyNavigation);

      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      var self = this;
      $('.et-hero-tab').click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(function () {
        _this.onScroll();
      });
      $(window).resize(function () {
        _this.onResize();
      });
    }

    _createClass(StickyNavigation, [{
      key: "onTabClick",
      value: function onTabClick(event, element) {
        event.preventDefault();
        var scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({
          scrollTop: scrollTop
        }, 600);
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
      }
    }, {
      key: "onResize",
      value: function onResize() {
        if (this.currentId) {
          this.setSliderCss();
        }
      }
    }, {
      key: "checkTabContainerPosition",
      value: function checkTabContainerPosition() {
        var offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;

        if ($(window).scrollTop() > offset) {
          $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        } else {
          $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
      }
    }, {
      key: "findCurrentTabSelector",
      value: function findCurrentTabSelector(element) {
        var newCurrentId;
        var newCurrentTab;
        var self = this;
        $('.et-hero-tab').each(function () {
          var id = $(this).attr('href');
          var offsetTop = $(id).offset().top - self.tabContainerHeight;
          var offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;

          if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = $(this);
          }
        });

        if (this.currentId != newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
        }
      }
    }, {
      key: "setSliderCss",
      value: function setSliderCss() {
        var width = 0;
        var left = 0;

        if (this.currentTab) {
          width = this.currentTab.css('width');
          left = this.currentTab.offset().left;
        }

        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
      }
    }]);

    return StickyNavigation;
  }();

  new StickyNavigation();
  /* ============================
  // 3D gallery photo
  ============================ */

  Vue.component("photo-card", {
    template: "<a class=\"card\"\n                  :href=\"link\"\n                  target=\"_blank\"\n                  ref=\"card\"\n                  @mousemove=\"move\"\n                  @mouseleave=\"leave\"\n                  @mouseover=\"over\">\n                    <div class=\"reflection\" ref=\"refl\"></div>\n                    <img :src=\"img\"/>\n              </a>",
    props: ["img", "link"],
    mounted: function mounted() {},
    data: function data() {
      return {
        debounce: null
      };
    },
    methods: {
      over: function over() {
        var refl = this.$refs.refl;
        refl.style.opacity = 1;
      },
      leave: function leave() {
        var card = this.$refs.card;
        var refl = this.$refs.refl;
        card.style.transform = "perspective(500px) scale(1)";
        refl.style.opacity = 0;
      },
      move: function move() {
        var card = this.$refs.card;
        var refl = this.$refs.refl;
        var relX = (event.offsetX + 1) / card.offsetWidth;
        var relY = (event.offsetY + 1) / card.offsetHeight;
        var rotY = "rotateY(".concat((relX - 0.5) * 60, "deg)");
        var rotX = "rotateX(".concat((relY - 0.5) * -60, "deg)");
        card.style.transform = "perspective(500px) scale(2) ".concat(rotY, " ").concat(rotX);
        var lightX = this.scale(relX, 0, 1, 150, -50);
        var lightY = this.scale(relY, 0, 1, 30, -100);
        var lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
        var lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
        var lightShade = "rgba(".concat(lightOpacity, ", ").concat(lightOpacity, ", ").concat(lightOpacity, ", 1)");
        var lightShadeBlack = "rgba(0, 0, 0, 1)";
        refl.style.backgroundImage = "radial-gradient(circle at ".concat(lightX, "% ").concat(lightY, "%, ").concat(lightShade, " 20%, ").concat(lightShadeBlack, ")");
      },
      scale: function scale(val, inMin, inMax, outMin, outMax) {
        return outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin);
      }
    }
  });
  var app = new Vue({
    el: "#grid"
  });
});