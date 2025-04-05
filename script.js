// Particle animation with enhanced variety
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `rgba(${Math.random() * 50 + 205}, 0, 0, ${Math.random() * 0.8 + 0.2})`; // Shades of red
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%'; // Circle or square
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = '-10vh';
    particle.style.animation = `fall ${Math.random() * 3 + 2}s linear, spin ${Math.random() * 2 + 1}s infinite`;
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 100); // Increased frequency for more chaos

// Dynamic stylesheet for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fall {
        0% { transform: translateY(-10vh); opacity: 1; }
        100% { transform: translateY(110vh); opacity: 0; }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);

// Countdown timer with sound effect on launch
const launchDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
const timerElement = document.getElementById('timer');
let launched = false;

function updateCountdown() {
    const now = new Date();
    const timeLeft = launchDate - now;
    
    if (timeLeft <= 0 && !launched) {
        timerElement.textContent = 'Launched!';
        launched = true;
        playLaunchSound();
        triggerLaunchAnimation();
        return;
    } else if (timeLeft <= 0) {
        timerElement.textContent = 'Launched!';
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
