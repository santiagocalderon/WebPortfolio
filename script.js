document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    /* Scroll Effect for Sections */
    function checkScroll() {
        const sections = document.querySelectorAll('.section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });

        /* Back to Top Button */
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    /* Attach Scroll Event Listener */
    window.addEventListener('scroll', () => {
        checkScroll();
    });

    /* Smooth Scroll on Navigation Click */
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    /* Back to Top Button Click */
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* Initial Execution */
    checkScroll();
});
