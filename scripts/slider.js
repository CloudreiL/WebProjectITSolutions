const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

const cardWidth = cards[0].offsetWidth + 20;
let currentPosition = 0;

function moveSlider(direction) {
    if (direction === 'next') {
        currentPosition += cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
        
        setTimeout(() => {
            const firstCard = slider.firstElementChild;
            slider.appendChild(firstCard);
            
            slider.style.transition = 'none';
            currentPosition = 0;
            slider.style.transform = `translateX(-${currentPosition}px)`;
            
            setTimeout(() => {
                slider.style.transition = 'transform 0.3s ease-in-out';
            }, 10);
        }, 300); 
        
    } else if (direction === 'prev') {
        const lastCard = slider.lastElementChild;
        slider.style.transition = 'none';
        slider.insertBefore(lastCard, slider.firstElementChild);
        currentPosition = cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
        
        slider.offsetHeight;
        
        slider.style.transition = 'transform 0.3s ease-in-out';
        currentPosition = 0;
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
}

nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));