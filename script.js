document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bar on load
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    // Reset progress to 0
    progressFill.style.width = '0%';
    
    // Animate to 65% over 2 seconds
    setTimeout(() => {
        progressFill.style.transition = 'width 2s ease-in-out';
        progressFill.style.width = '65%';
    }, 500);
    
    // Add crane swaying animation
    const craneIcon = document.querySelector('.crane-icon');
    let swayDirection = 1;
    
    setInterval(() => {
        craneIcon.style.transform = `rotate(${swayDirection * 2}deg)`;
        swayDirection *= -1;
    }, 3000);
    
    // Add click interaction to main title
    const mainTitle = document.querySelector('.main-title');
    mainTitle.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
    
    // Random progress updates (simulating construction progress)
    let currentProgress = 65;
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every 5 seconds
            currentProgress = Math.min(currentProgress + Math.floor(Math.random() * 3), 95);
            progressFill.style.width = currentProgress + '%';
            progressText.textContent = currentProgress + '% Complete';
        }
    }, 5000);
});