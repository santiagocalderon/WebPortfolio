document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('menu-open');
  });

  /* Scroll Effect for Sections */
  function checkScroll() {
    const sections = document.querySelectorAll('.portfolio-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });
  }

  /* Attach Scroll Event Listener */
  window.addEventListener('scroll', () => {
    checkScroll();
  });

  /* Initial Execution */
  checkScroll();
});
