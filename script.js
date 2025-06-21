// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in class to cards and other elements
    const cards = document.querySelectorAll('.service-card, .about-card, .education-card, .contact-item');
    cards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Removed typing effect to prevent HTML tag display issues
    // The hero title will display normally with proper HTML rendering
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in');
    observer.observe(item);
});

// Add loading animation
window.addEventListener('load', () => {
    // Removed loading animation that was causing display issues
});

// Add CSS for loading animation
// Removed loading animation CSS that was setting body opacity to 0

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// EmailJS Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.message-form');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const emailPhone = document.getElementById('email-phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !emailPhone || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: emailPhone,
            subject: subject,
            message: message
        };
        
        // Send email using EmailJS
        emailjs.send('service_nzze2b8', 'template_ixvungi', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showNotification('Message sent successfully!', 'success');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showNotification('Failed to send message. Please try again.', 'error');
            })
            .finally(function() {
                // Reset button state
                submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                submitBtn.disabled = false;
            });
    });
});

// Notification function
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Services Carousel Functionality
let currentSlide = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let isMobile = false;

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.querySelector('.services-grid');
    const dots = document.querySelectorAll('.dot');
    
    if (!servicesGrid) return;
    
    // Check if mobile
    isMobile = window.innerWidth <= 768;
    
    // Touch events for mobile
    servicesGrid.addEventListener('touchstart', touchStart, { passive: false });
    servicesGrid.addEventListener('touchmove', touchMove, { passive: false });
    servicesGrid.addEventListener('touchend', touchEnd, { passive: false });
    
    // Mouse events for desktop testing
    servicesGrid.addEventListener('mousedown', touchStart);
    servicesGrid.addEventListener('mousemove', touchMove);
    servicesGrid.addEventListener('mouseup', touchEnd);
    servicesGrid.addEventListener('mouseleave', touchEnd);
    
    // Prevent context menu on right click
    servicesGrid.addEventListener('contextmenu', e => e.preventDefault());
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Auto-play carousel (only on mobile)
    if (isMobile) {
        setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            // Reset to first slide when switching to desktop
            goToSlide(0);
        }
    });
});

function touchStart(event) {
    if (!isMobile) return; // Only on mobile
    
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
    servicesGrid.style.cursor = 'grabbing';
    servicesGrid.style.transition = 'none';
}

function touchMove(event) {
    if (!isMobile) return; // Only on mobile
    
    if (isDragging) {
        event.preventDefault(); // Prevent scrolling
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    if (!isMobile) return; // Only on mobile
    
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    isDragging = false;
    cancelAnimationFrame(animationID);
    servicesGrid.style.transition = 'transform 0.3s ease';
    
    const movedBy = currentTranslate - prevTranslate;
    
    // Determine if slide should move
    if (Math.abs(movedBy) > 50) { // Reduced threshold for better responsiveness
        if (movedBy < 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    } else {
        goToSlide(currentSlide);
    }
    
    servicesGrid.style.cursor = 'grab';
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesGrid.style.transform = `translateX(${currentTranslate}px)`;
    }
}

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    goToSlide(currentSlide);
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = 2;
    }
    goToSlide(currentSlide);
}

function goToSlide(slideIndex) {
    const servicesGrid = document.querySelector('.services-grid');
    const dots = document.querySelectorAll('.dot');
    
    if (!servicesGrid) return;
    
    currentSlide = slideIndex;
    const slideWidth = servicesGrid.offsetWidth;
    currentTranslate = -(slideWidth * slideIndex);
    prevTranslate = currentTranslate;
    
    setSliderPosition();
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Booking Modal Functions
function openBookingModal(serviceName) {
    const modal = document.getElementById('bookingModal');
    const serviceNameSpan = document.getElementById('serviceName');
    
    if (modal && serviceNameSpan) {
        serviceNameSpan.textContent = serviceName;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Auto-fill subject with service name
        const subjectInput = document.getElementById('booking-subject');
        if (subjectInput) {
            subjectInput.value = `Booking: ${serviceName}`;
        }
        
        // Focus on first input
        const firstInput = document.getElementById('booking-name');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 300);
        }
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        
        // Reset form
        const form = document.querySelector('.booking-form');
        if (form) {
            form.reset();
        }
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBookingModal();
            }
        });
    }
    
    // Handle booking form submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('booking-name').value;
            const emailPhone = document.getElementById('booking-email-phone').value;
            const subject = document.getElementById('booking-subject').value;
            const message = document.getElementById('booking-message').value;
            
            // Validate form
            if (!name || !emailPhone || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare template parameters
            const templateParams = {
                from_name: name,
                from_email: emailPhone,
                subject: subject,
                message: message
            };
            
            // Send email using EmailJS
            emailjs.send('service_nzze2b8', 'template_ixvungi', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Booking request sent successfully!', 'success');
                    closeBookingModal();
                }, function(error) {
                    console.log('FAILED...', error);
                    showNotification('Failed to send booking request. Please try again.', 'error');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                });
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBookingModal();
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Gyro/Tilt Effect for Service Cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            // Ensure very high z-index during interaction
            card.style.zIndex = '9999';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            // Reset z-index after animation completes
            setTimeout(() => {
                card.style.zIndex = '1000';
            }, 500);
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
            card.style.zIndex = '9999';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
        });
    });
}); 