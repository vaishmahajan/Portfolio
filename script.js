document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. HORIZONTAL PROJECT SLIDER CONTROLS 
    ========================================================= */
    const sliderTrack = document.getElementById('project-slider-track');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (sliderTrack && prevButton && nextButton) {
        // Defines how far the slider scrolls (Card width + Gap)
        const scrollStep = 330; 

        nextButton.addEventListener('click', () => {
            sliderTrack.scrollLeft += scrollStep;
            
            // Loop back to start (simulated infinite scroll)
            if (sliderTrack.scrollLeft + sliderTrack.clientWidth >= sliderTrack.scrollWidth - scrollStep) {
                // Use a short delay to allow the smooth scroll animation to finish before resetting
                setTimeout(() => {
                    sliderTrack.scrollLeft = 0;
                }, 500); 
            }
        });

        prevButton.addEventListener('click', () => {
            sliderTrack.scrollLeft -= scrollStep;
             
            // Loop to end (simulated infinite scroll)
            if (sliderTrack.scrollLeft === 0) {
                // Check if we are at the very beginning after scrolling back
                setTimeout(() => {
                    sliderTrack.scrollLeft = sliderTrack.scrollWidth;
                }, 500); 
            }
        });
    }

    /* =========================================================
       2. NETLIFY AJAX FORM SUBMISSION
    ========================================================= */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            // 1. Prevent default form submission (stops the redirect)
            e.preventDefault(); 
            
            // 2. Show processing message
            formMessage.innerHTML = `<span style="color:#ffd700;"><i class="fas fa-sync fa-spin"></i> Sending message...</span>`;

            // 3. Collect and encode form data
            const formData = new FormData(this);
            // Netlify requires data to be URL-encoded for basic forms
            const encoded = new URLSearchParams(formData).toString();

            // 4. Send data using fetch API to Netlify endpoint
            fetch('/', { //  (Netlify detects the form)
                method: 'POST',
                // Netlify requires this header for URL-encoded data
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encoded 
            })
            .then(response => {
                if (response.ok) {
                    // Success! 
                    formMessage.innerHTML = `
                        <span style="color:#00ff88; font-weight: bold;">
                            <i class="fas fa-check-circle"></i> Message Sent! Vaishnavi will respond shortly.
                        </span>`;
                    
                    // Clear the form fields
                    contactForm.reset();

                    // OPTIONAL: You can hide the form fields but keep the message visible
                    // This section is commented out, but you can uncomment it if you want the form fields to disappear.
                    // contactForm.querySelector('.row').style.display = 'none';
                    // contactForm.querySelector('textarea').style.display = 'none';
                    // contactForm.querySelector('button[type="submit"]').style.display = 'none';
                    
                } else {
                    // Failure or Netlify error
                    throw new Error('Submission failed on Netlify side.');
                }
            })
            .catch(error => {
                // Network failure 
                console.error('Submission Error:', error);
                formMessage.innerHTML = `
                    <span style="color:#ff4d4d; font-weight: bold;">
                        <i class="fas fa-times-circle"></i> Error! Please try again or email directly.
                    </span>`;
            });
        });
    }

});