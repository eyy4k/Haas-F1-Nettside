
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Dark Mode //

    document.addEventListener("DOMContentLoaded", () => {
        const toggleButton = document.getElementById("toggle-darkmode");
      
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
      

      
      



