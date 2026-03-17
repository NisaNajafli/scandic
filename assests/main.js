const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
new Swiper(".hero-swiper", {
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
});
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


