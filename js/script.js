// ============ Language toggle (Hindi default) ============
const langToggle = document.getElementById("langToggle");

const pageTitles = {
  hi: "जसवंत सिंह हाड़ा | पूर्व विधायक, शुजालपुर",
  en: "Jaswant Singh Hada | Former MLA, Shujalpur",
};

function setLang(lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.title = pageTitles[lang];
  langToggle.textContent = lang === "hi" ? "English" : "हिंदी";
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    /* private browsing — preference just won't persist */
  }
}

let savedLang = "hi";
try {
  savedLang = localStorage.getItem("lang") || "hi";
} catch (e) {}
setLang(savedLang);

langToggle.addEventListener("click", () => {
  setLang(document.documentElement.dataset.lang === "hi" ? "en" : "hi");
});

// ============ Mobile navigation ============
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// ============ Footer year ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ Scroll reveal ============
const revealTargets = document.querySelectorAll(
  ".section-head, .about-grid, .timeline-item, .card, .gallery-item, .contact-card, .quote-band blockquote"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// ============ Animated counters ============
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".count").forEach((el) => countObserver.observe(el));
