const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================
   DOM REFERENCES
========================= */
const navbar = $("#navbar");
const menu = $("#mobileMenu");
const hamburger = $("#hamburger");
const form = $("#contactForm");
const mobileLinks = $$(".navbar__mobile a");

/* =========================
   NAVBAR
========================= */
const setNavbarShadow = () => {
  if (!navbar) return;

  navbar.style.boxShadow =
    window.scrollY > 20
      ? "0 2px 20px rgba(0,0,0,0.06)"
      : "none";
};

/* =========================
   MOBILE MENU
========================= */
const toggleMenu = () => {
  if (!menu || !hamburger) return;

  menu.classList.toggle("is-open");
  hamburger.classList.toggle("is-active");
};

const closeMenu = () => {
  if (!menu || !hamburger) return;

  menu.classList.remove("is-open");
  hamburger.classList.remove("is-active");
};

/* =========================
   CONTACT FORM
========================= */
const handleFormSubmit = (event) => {
  event.preventDefault();

  alert(
    "Terima kasih! Pesan Anda telah terkirim (simulasi).\nKami akan menghubungi Anda segera."
  );

  form.reset();
};

/* =========================
   EVENT BINDINGS
========================= */
const bindEvents = () => {
  hamburger?.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", setNavbarShadow);

  form?.addEventListener("submit", handleFormSubmit);
};

/* =========================
   APP INIT
========================= */
const init = () => {
  bindEvents();
  setNavbarShadow();
};

document.addEventListener("DOMContentLoaded", init);