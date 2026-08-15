document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Contact Form Interactivity & Validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const nameInput = document.getElementById('fullName');
        const phoneInput = document.getElementById('phone');

        // Real-time Restriction: Bawal mag-type ng numero sa Full Name
        if (nameInput) {
            nameInput.addEventListener('input', function() {
                this.value = this.value.replace(/[0-9]/g, '');
            });
        }

        // Real-time Restriction: Bawal mag-type ng letters sa Phone Number
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        }

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();

            // Validation 1: Letters at spaces lang ang pwede sa Full Name
            const nameRegex = /^[a-zA-Z\s]+$/;
            if (!nameRegex.test(name)) {
                alert("Error: Ang Full Name ay dapat mga letra lamang at walang numero!");
                nameInput.focus();
                return;
            }

            // Validation 2: Dapat eksaktong 11 digits ang Phone Number
            const phoneRegex = /^[0-9]{11}$/;
            if (!phoneRegex.test(phone)) {
                alert("Error: Ang Phone Number ay dapat eksaktong 11 digits (halimbawa: 09123456789)!");
                phoneInput.focus();
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        });
    }

    // 3. About Me Interactive Tabs
    const tabButtons = document.querySelectorAll('.about-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');
                const targetPaneId = button.getAttribute('data-tab');
                const targetPane = document.getElementById(targetPaneId);
                
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // 4. Expandable Education Cards (Accordion)
    const expandableCards = document.querySelectorAll('.expandable-card');

    expandableCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // 5. Education Filter Tabs (All / Formal / Certifications)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

});