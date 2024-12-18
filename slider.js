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
        
        // Ждем окончания анимации
        setTimeout(() => {
            // Перемещаем первую карточку в конец
            const firstCard = slider.firstElementChild;
            slider.appendChild(firstCard);
            
            // Сбрасываем позицию без анимации
            slider.style.transition = 'none';
            currentPosition = 0;
            slider.style.transform = `translateX(-${currentPosition}px)`;
            
            // Восстанавливаем анимацию
            setTimeout(() => {
                slider.style.transition = 'transform 0.3s ease-in-out';
            }, 10);
        }, 300); // Время должно совпадать с длительностью CSS-анимации
        
    } else if (direction === 'prev') {
        // Перемещаем последнюю карточку в начало без анимации
        const lastCard = slider.lastElementChild;
        slider.style.transition = 'none';
        slider.insertBefore(lastCard, slider.firstElementChild);
        currentPosition = cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
        
        // Форсируем перерисовку
        slider.offsetHeight;
        
        // Восстанавливаем анимацию и двигаем слайдер
        slider.style.transition = 'transform 0.3s ease-in-out';
        currentPosition = 0;
        slider.style.transform = `translateX(-${currentPosition}px)`;
    }
}

nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));