/**
 * NovaHire Technologies — Shared UI Utilities
 * Handles navbar, mobile menu, icon loading, and common functionality.
 */

/* ── Icon Sprite Loader ── */
async function loadIcons() {
  try {
    const res = await fetch("assets/icons.svg");
    const text = await res.text();
    const container = document.createElement("div");
    container.hidden = true;
    container.innerHTML = text;
    document.body.prepend(container);
  } catch (e) {
    console.warn("Icons sprite could not be loaded:", e);
  }
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-overlay");

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggle.focus();
  }

  toggle.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  /* Close on nav link click */
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* Close on Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

/* ── Active Nav Link ── */
function setActiveNavLink() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ── Scroll-based Navbar Shadow ── */
function initNavbarScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}

/* ── Smooth Scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ── Intersection Observer Fade-In ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

/* ── SVG Icon Helper ── */
function icon(name, cls = "") {
  return `<svg class="icon ${cls}" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
}

/* ── Init Common ── */
document.addEventListener("DOMContentLoaded", async () => {
  await loadIcons();
  initMobileMenu();
  setActiveNavLink();
  initNavbarScroll();
  initSmoothScroll();
  initScrollAnimations();
});
