document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile nav if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('.header')?.offsetHeight || 0), // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (categoryButtons.length > 0 && portfolioItems.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                const category = button.dataset.category;

                portfolioItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block'; // Show item
                        // Optional: Add a fade-in effect
                        item.style.opacity = 0;
                        setTimeout(() => {
                            item.style.opacity = 1;
                            item.style.transition = 'opacity 0.5s ease-in-out';
                        }, 50);
                    } else {
                        item.style.display = 'none'; // Hide item
                    }
                });
            });
        });
    }

    // Simple testimonial slider (manual scrolling with CSS scroll-snap)
    // No JS needed for basic scroll-snap, but can add navigation if required.
});
