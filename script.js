// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple animation to the hero text
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero h1');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroText.style.transition = 'opacity 0.5s, transform 0.5s';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 500);
});