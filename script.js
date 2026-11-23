const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.20 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  msg.textContent = `Solicitud recibida, ${nombre}. Un socio director te responderá hoy mismo.`;
  form.reset();
});