document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const btn = document.getElementById('startProjectBtn');
    const closeBtn = document.querySelector('.close-btn');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Добавляем небольшую задержку перед добавлением класса show
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });

    function closeModal() {
        modal.classList.remove('show');
        // Ждем окончания анимации перед скрытием модального окна
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });
}); 