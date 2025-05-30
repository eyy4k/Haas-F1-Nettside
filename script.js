
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// Clickable links with JS //
function createLinks() {
  const links = document.querySelectorAll('.clickable-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const url = link.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
}



// Dark Mode //

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-darkmode");

  createLinks(); // Kall funksjonen for å lage klikkbare lenker

  if (!toggleButton) return; // Sikkerhet i tilfelle knappen mangler

  // Funksjon for å toggle night mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Endre knappetekst og lagre tilstand
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️ Toggle Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      toggleButton.textContent = "🌙 Toggle Night Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  }

  // Bruk tidligere valgt modus hvis lagret
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Toggle Light Mode";
  }


  toggleButton.addEventListener("click", toggleDarkMode);
});

// Get In Touch Form //

document.getElementById('kontaktform').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('navn').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "yellow";
    return;
  }

  status.textContent = "Thank you for contacting Haas F1 Team!";
  status.style.color = "black";

  this.reset();
});






