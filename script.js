document.getElementById("navToggle").addEventListener("click", () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We’ll get back to you soon.");
  e.target.reset();
});
