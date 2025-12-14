/**
 * Ecos do Silêncio - Landing Page
 * Pure JavaScript - No dependencies
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // ===================================
    // MOBILE MENU
    // ===================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on element position
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ===================================
    // VIDEO MODAL
    // ===================================
    const playButton = document.getElementById('playButton');
    const videoModal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const videoFrame = document.getElementById('videoFrame');

    // Example YouTube video URL (replace with actual trailer)
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    playButton.addEventListener('click', function() {
        videoFrame.src = videoUrl;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        videoModal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);

    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===================================
    // PARALLAX EFFECT (OPTIONAL)
    // ===================================
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    function handleParallax() {
        parallaxSections.forEach(section => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            section.style.backgroundPositionY = `${rate}px`;
        });
    }

    // Only enable parallax on larger screens
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleParallax);
    }

    // ===================================
    // QUOTE CARDS HOVER EFFECT
    // ===================================
    const quoteCards = document.querySelectorAll('.quote-card');
    
    quoteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px hsla(45, 80%, 55%, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // ===================================
    // FORMAT CARDS ANIMATION
    // ===================================
    const formatCards = document.querySelectorAll('.format-card');
    
    formatCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px hsla(0, 0%, 0%, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // ===================================
    // PRELOADER (OPTIONAL)
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations for hero section
        setTimeout(() => {
            document.querySelectorAll('.hero .animate-on-scroll').forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, i * 200);
            });
        }, 300);
    });

    // ===================================
    // STATS COUNTER ANIMATION
    // ===================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
        
        statsAnimated = true;
    }

    // Observe stats section
    const statsSection = document.querySelector('.book-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    console.log('✨ Ecos do Silêncio - Site carregado com sucesso!');
});
