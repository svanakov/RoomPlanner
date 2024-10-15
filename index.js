let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card');
const resetBtn = document.getElementById('reset-btn'); // Получаем элемент кнопки
const gridSize = 64; // Размер шага сетки, эквивалент 4em в пикселях

card.addEventListener('mousedown', mouseDown);
resetBtn.addEventListener('click', resetPosition); // Добавляем обработчик для кнопки

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    
    card.classList.add('active'); // Добавляем класс "active" при нажатии

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';
}

function mouseUp(e) {
    card.classList.remove('active'); // Убираем класс "active" при отпускании

    document.removeEventListener('mousemove', mouseMove);
}

// Функция сброса положения квадрата
function resetPosition() {
    card.style.left = '0px';
    card.style.top = '0px';
    card.classList.remove('active'); // Убираем класс, если сбросили позицию
}