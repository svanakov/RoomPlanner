const container = document.getElementById('container');
    const addSofaBtn = document.getElementById('add-sofa');
    const addChairBtn = document.getElementById('add-chair');
    const addTableBtn = document.getElementById('add-table');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-btn');
    const saveProgressBtn = document.getElementById('save-progress-btn');
    const exitBtn = document.getElementById('exit-btn');
    const roomNameDisplay = document.getElementById('room-name');

    const furnitureImages = {
        sofa: '{% static "main/img/plus.png" %}',
        chair: '{% static "images/chair.png" %}',
        table: '{% static "images/table.png" %}'
    };

    document.addEventListener('DOMContentLoaded', () => {
        const savedRoom = JSON.parse(localStorage.getItem('roomData'));
        if (savedRoom) {
            roomNameDisplay.textContent = `Комната: ${savedRoom.roomName}`;
            savedRoom.furniture.forEach(item => {
                createFurniture(item.type, item.left, item.top, item.rotation);  // Восстановление мебели
            });
        }
    });

    addSofaBtn.addEventListener('click', () => addFurniture('sofa'));
    addChairBtn.addEventListener('click', () => addFurniture('chair'));
    addTableBtn.addEventListener('click', () => addFurniture('table'));
    resetBtn.addEventListener('click', resetFurniture);
    saveBtn.addEventListener('click', saveRoom);
    saveProgressBtn.addEventListener('click', saveProgress);
    exitBtn.addEventListener('click', exitToMain);

    function addFurniture(type) {
        const furniture = document.createElement('img');
        furniture.src = furnitureImages[type];
        furniture.classList.add('furniture');
        furniture.style.left = `${Math.random() * (container.offsetWidth - 110)}px`;
        furniture.style.top = `${Math.random() * (container.offsetHeight - 110)}px`;
        furniture.setAttribute('data-rotation', 0);  // Начальная ориентация

        const rotateBtn = document.createElement('button');
        rotateBtn.textContent = '↻';
        rotateBtn.classList.add('rotate-btn');
        rotateBtn.addEventListener('click', rotateFurniture);

        furniture.appendChild(rotateBtn);
        container.appendChild(furniture);

        furniture.addEventListener('mousedown', startDrag);
    }

    function rotateFurniture(event) {
        const furniture = event.target.parentElement;
        let rotation = parseInt(furniture.getAttribute('data-rotation'));
        rotation = (rotation + 90) % 360;
        furniture.style.transform = `rotate(${rotation}deg)`;
        furniture.setAttribute('data-rotation', rotation);  // Обновляем ориентацию
    }

    function startDrag(event) {
        const furniture = event.target;
        let startX = event.clientX;
        let startY = event.clientY;

        function mouseMove(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            furniture.style.left = `${furniture.offsetLeft + dx}px`;
            furniture.style.top = `${furniture.offsetTop + dy}px`;

            startX = e.clientX;
            startY = e.clientY;
        }

        function mouseUp() {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        }

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }

    function resetFurniture() {
        const furnitureItems = document.querySelectorAll('.furniture');
        furnitureItems.forEach(item => item.remove());
    }

    function saveRoom() {
        const roomName = prompt('Введите название комнаты:');
        if (roomName) {
            const furnitureItems = document.querySelectorAll('.furniture');
            const furnitureData = Array.from(furnitureItems).map(item => {
                return {
                    type: item.src.split('/').pop().split('.')[0],  // Извлекаем тип мебели
                    left: item.style.left,
                    top: item.style.top,
                    rotation: item.getAttribute('data-rotation')
                };
            });

            const roomData = {
                roomName: roomName,
                furniture: furnitureData
            };

            localStorage.setItem('roomData', JSON.stringify(roomData));
            roomNameDisplay.textContent = `Комната: ${roomName}`;
            alert('Комната сохранена!');
        }
    }

    function saveProgress() {
        const furnitureItems = document.querySelectorAll('.furniture');
        const furnitureData = Array.from(furnitureItems).map(item => {
            return {
                left: item.style.left,
                top: item.style.top,
                rotation: item.getAttribute('data-rotation')
            };
        });

        const savedRoom = JSON.parse(localStorage.getItem('roomData')) || {};
        savedRoom.furniture = furnitureData;

        localStorage.setItem('roomData', JSON.stringify(savedRoom));
        alert('Прогресс сохранен!');
    }

    function exitToMain() {
        window.location.href = "/main";
    }

    function createFurniture(type, left, top, rotation) {
        const furniture = document.createElement('img');
        furniture.src = furnitureImages[type];
        furniture.classList.add('furniture');
        furniture.style.left = left;
        furniture.style.top = top;
        furniture.setAttribute('data-rotation', rotation);

        const rotateBtn = document.createElement('button');
        rotateBtn.textContent = '↻';
        rotateBtn.classList.add('rotate-btn');
        rotateBtn.addEventListener('click', rotateFurniture);

        furniture.appendChild(rotateBtn);
        container.appendChild(furniture);
    }