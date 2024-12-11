
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

const cardWidth = cards[0].offsetWidth + 20;
let currentPosition = 0;


function moveSlider(direction){
    const maxScroll = (cards.length - 1) * cardWidth;
    if(direction === 'next'){
        if(currentPosition < maxScroll){
            currentPosition += cardWidth;
        }else{
            currentPosition = 0;
        }
    }else if(direction === 'prev'){
        if(currentPosition > 0){
            currentPosition -= cardWidth;
        }else{
            currentPosition = maxScroll;
        }
    }
    slider.style.transform = `translateX(-${currentPosition}px)`;
}

nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));

