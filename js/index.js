 document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const searchToggle = document.getElementById('searchToggle');
            const searchBar = document.getElementById('searchBar');
            const searchClose = document.getElementById('searchClose');
            const searchInput = document.getElementById('searchInput');
            const mobileToggle = document.getElementById('mobileToggle');
            const navMenu = document.querySelector('.nav-menu');
            const navbar = document.querySelector('.navbar-custom');
            const navLinks = document.querySelectorAll('.nav-link');

            // Search functionality
            searchToggle.addEventListener('click', function() {
                searchBar.classList.add('active');
                setTimeout(() => {
                    searchInput.focus();
                }, 300);
            });

            searchClose.addEventListener('click', function() {
                searchBar.classList.remove('active');
                searchInput.value = '';
            });

            // Close search on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && searchBar.classList.contains('active')) {
                    searchBar.classList.remove('active');
                    searchInput.value = '';
                }
            });

            // Search form submission
            document.querySelector('.search-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    console.log('Searching for:', query);
                    // Add your search logic here
                    alert(`Searching for: "${query}"`);
                    searchBar.classList.remove('active');
                    searchInput.value = '';
                }
            });

            // Mobile menu toggle
            mobileToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Close search bar if open
                if (searchBar.classList.contains('active')) {
                    searchBar.classList.remove('active');
                    searchInput.value = '';
                }
            });

            // Navigation link functionality
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(nl => nl.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Close mobile menu
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                    
                    // Smooth scroll to section
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId.startsWith('#')) {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });

            // Scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            });

            // Close search and mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                // Close search bar
                if (!searchBar.contains(e.target) && !searchToggle.contains(e.target) && searchBar.classList.contains('active')) {
                    searchBar.classList.remove('active');
                    searchInput.value = '';
                }
                
                // Close mobile menu
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });

            // Smooth reveal animation on load
            setTimeout(() => {
                navbar.style.opacity = '1';
                navbar.style.transform = 'translateY(0)';
            }, 100);
        });
        // about
        AOS.init({
      duration: 4000,
      once: true
    });

        AOS.init({ duration: 1000 });
        // 
          AOS.init({
      once: true,
      duration: 1000,
    });
    // ask
       AOS.init({ duration: 1000, once: true });

    function toggleFaq(element) {
      const answer = element.nextElementSibling;
      const isActive = element.classList.contains('active');
      document.querySelectorAll('.law-justice-faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      });
      if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
      }
    }

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      document.querySelector('.law-justice-scroll-progress').style.width = scrollPercent + '%';
    });

    document.querySelector('.law-justice-cta-button').addEventListener('click', () => {
      document.querySelector('.law-justice-faq-section').scrollIntoView({ behavior: 'smooth' });
    });

    const decor = document.querySelector('.law-justice-decoration');
    if (decor) {
      setInterval(() => {
        decor.style.transform = `translateY(-50%) rotate(${Math.sin(Date.now() * 0.001) * 5}deg)`;
      }, 50);
    }

    document.querySelectorAll('.law-justice-faq-item').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });

    // contact 
       // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-sine',
            once: true,
            mirror: false
        });

        // Form submission handler
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('.btn-send');
            const originalText = button.innerHTML;
            
            // Animate button
            button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                button.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.background = 'linear-gradient(45deg, #ffc107, #ff9800)';
                    this.reset();
                }, 2000);
            }, 2000);
        });

        // Enhanced hover effects for form inputs
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.3s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Parallax effect for floating elements
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-circle');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Interactive map click effect
        document.querySelector('.map-placeholder').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });

        // Typing effect for welcome title
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Trigger typing effect when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.getAttribute('data-text');
                    if (text) {
                        typeWriter(entry.target, text);
                        observer.unobserve(entry.target);
                    }
                }
            });
        });

        // Add glowing effect to social icons
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(255,193,7,0.6)';
                this.style.animation = 'pulse 1s ease-in-out infinite';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
                this.style.animation = '';
            });
        });

        // Add CSS animation for pulse effect
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: translateY(-3px) scale(1.1); }
                50% { transform: translateY(-3px) scale(1.2); }
            }
        `;
        document.head.appendChild(style);

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button');
            const input = this.querySelector('input');
            const originalButtonContent = button.innerHTML;
            
            // Animate button
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            // Simulate newsletter subscription
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                setTimeout(() => {
                    button.innerHTML = originalButtonContent;
                    button.disabled = false;
                    button.style.background = 'linear-gradient(45deg, #ffc107, #ff9800)';
                    input.value = '';
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.style.cssText = 'color: #28a745; font-size: 0.85rem; margin-top: 10px; opacity: 0; transition: opacity 0.3s ease;';
                    successMsg.textContent = 'Successfully subscribed to our newsletter!';
                    this.appendChild(successMsg);
                    
                    setTimeout(() => successMsg.style.opacity = '1', 100);
                    setTimeout(() => {
                        successMsg.style.opacity = '0';
                        setTimeout(() => successMsg.remove(), 300);
                    }, 3000);
                }, 2000);
            }, 1500);
        });

        // Footer social icons enhanced effects
        document.querySelectorAll('.footer-social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 15px 30px rgba(255,193,7,0.5)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });

        // Practice areas hover effect
        document.querySelectorAll('.practice-areas li a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.paddingLeft = '15px';
                this.style.color = '#ffc107';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.paddingLeft = '0';
                this.style.color = '';
            });
        });