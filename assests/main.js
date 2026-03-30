const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  effect: "fade",
  speed: 900,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: "[data-slider-button='2']",
    prevEl: "[data-slider-button='1']",
  },
  on: {
    init(swiper) {
      updateHeroActionPanels(swiper.realIndex);
    },
    slideChange(swiper) {
      updateHeroActionPanels(swiper.realIndex);
    },
  },
});

function updateHeroActionPanels(activeIndex) {
  document.querySelectorAll("[data-hero-actions]").forEach((panel) => {
    const idx = Number(panel.getAttribute("data-hero-actions"));
    panel.hidden = idx !== activeIndex;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open_menu");
  const closeBtn = document.getElementById("close_menu");
  const menu = document.querySelector(".mobile__menu");
  const overlay = document.getElementById("menu_overlay");
  const menuLinks = document.querySelectorAll(".mobile__menu a");

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        faqItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });
});
document.getElementById("year").textContent = new Date().getFullYear();



document.querySelectorAll(".saunas-slider").forEach((sliderEl) => {
  const slidesCount = sliderEl.querySelectorAll(".swiper-slide").length;
  const shouldLoop = slidesCount > 3;
  const sectionEl = sliderEl.closest(".saunas-section");
  const prevEl = sectionEl && sectionEl.querySelector(".saunas-nav-prev");
  const nextEl = sectionEl && sectionEl.querySelector(".saunas-nav-next");

  new Swiper(sliderEl, {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: shouldLoop,
    grabCursor: true,
    watchOverflow: true,
    navigation:
      prevEl && nextEl
        ? {
            prevEl,
            nextEl,
          }
        : undefined,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    breakpoints: {
      0: { slidesPerView: 1.1 },
      600: { slidesPerView: 2 },
      1100: { slidesPerView: 3 },
    },
  });
});

(function () {

  const mainButton = document.getElementById("main-button");
  if (mainButton) {
    mainButton.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
})();