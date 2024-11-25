document.addEventListener('DOMContentLoaded', () => {
    const savedRoom = JSON.parse(localStorage.getItem('roomData'));
    const roomNameDisplay = document.getElementById('room-name');
    const lastEditedDisplay = document.getElementById('last-edited');

    if (savedRoom) {
        // Обновляем название комнаты
        roomNameDisplay.textContent = savedRoom.roomName || 'Без названия';

        // Обновляем время редактирования
        const lastEdited = savedRoom.lastEdited || 'Неизвестно';
        lastEditedDisplay.textContent = `Редактировано ${lastEdited}`;
    } else {
        // Если данных нет, устанавливаем значения по умолчанию
        roomNameDisplay.textContent = 'Пустая комната';
        lastEditedDisplay.textContent = 'Редактировать';
    }
    // Обработчик для кнопки "Создать новый"
    const createNewRoomButton = document.getElementById('create-new-room');
    createNewRoomButton.addEventListener('click', createNewRoom);
});

// Функция для создания новой комнаты
function createNewRoom() {
    // Очистка данных из localStorage
    localStorage.removeItem('roomData');

    // Обновление отображения на странице
    document.getElementById('room-name').textContent = 'Новая комната';
    document.getElementById('last-edited').textContent = 'Не редактировалось';

    // Перенаправление на страницу с пустой комнатой
    window.location.href = '/playground/';  // Замените '/playground/' на нужный вам URL
}