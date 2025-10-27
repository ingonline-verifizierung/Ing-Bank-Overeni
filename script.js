document.addEventListener('DOMContentLoaded', function() {
    const progressFill = document.querySelector('.progress-fill');
    const cards = document.querySelectorAll('.transfer-progress-card, .details-card, .participant-card');
    
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
    
    setTimeout(() => {
        if (progressFill) {
            progressFill.style.width = '95%';
        }
    }, 500);
});