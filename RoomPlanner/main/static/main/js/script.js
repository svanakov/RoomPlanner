
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Отключаем стандартную отправку формы

        // Логика для регистрации пользователя (валидация, отправка на сервер и т.д.)
        // Если успешно, перенаправляем на основную страницу
        // window.location.href = "{% url 'main' %}";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');

    // Добавляем событие клика на логотип
    logo.addEventListener('click', function() {
        window.location.href = 'registration.html'; // Перенаправляем на начальную страницу
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const room = document.getElementById('room');

    // Добавляем событие клика на логотип
    room.addEventListener('click', function() {
        window.location.href = 'playground.html'; // Перенаправляем на начальную страницу
    });
});