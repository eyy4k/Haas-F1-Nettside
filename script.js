
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

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('toggle-darkmode');
        const body = document.body;
      
        // Sjekk localStorage for tidligere valg
        if (localStorage.getItem('darkMode') === 'enabled') {
          body.classList.add('dark-mode');
        }
      
        toggleButton.addEventListener('click', () => {
          body.classList.toggle('dark-mode');
      
          // Lagre valget i localStorage
          if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
          } else {
            localStorage.setItem('darkMode', 'disabled');
          }
        });
      });
      



