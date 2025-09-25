// Greeting by time of day
(function () {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
  const el = document.getElementById("greeting");
  if (el) el.textContent = greet;
})();

// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form feedback
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.name || !data.email || !data.message) {
    note.hidden = false;
    note.style.color = "crimson";
    note.textContent = "Please fill in all fields.";
  } else {
    note.hidden = false;
    note.style.color = "green";
    note.textContent = "Thanks!";
    form.reset();
  }
});
