const btn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll("#mobileMenu a");
const contactForm = document.querySelector("#contact form");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    form.reportValidity();
    return null;
  }
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const service = String(data.get("service") || "").trim();
  const message = String(data.get("message") || "").trim();
  const text = `Hello Home Stylist!\n\nMy name is ${name} with Phone Number ${phone} and Email ${email}.\nI am interested in: ${service}.\nMessage: ${message || "Please share more information and prices."}`;
  const mailtoUrl = `mailto:estherndosi24@gmail.com?subject=${encodeURIComponent("New Website Inquiry from " + name)}&body=${encodeURIComponent(text)}`;
  contactForm.reset();
  window.location.href = mailtoUrl;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          ),
        );
    });
  },
  { threshold: 0.1 },
);
sections.forEach((section) => observer.observe(section));
