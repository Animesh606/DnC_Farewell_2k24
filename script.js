const names = document.querySelectorAll('.name');
const directions = ['top', 'right', 'bottom', 'left'];
let currentIndex = 0;

function showName() {
    const nameElement = names[currentIndex];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const startPosition = getStartPosition(direction);
    const centerPosition = getCenterPosition();

    nameElement.style.transition = 'none';
    nameElement.style.top = startPosition.top;
    nameElement.style.left = startPosition.left;
    nameElement.style.opacity = 1;

    setTimeout(() => {
        nameElement.style.transition = 'all 1s ease';
        nameElement.style.top = centerPosition.top;
        nameElement.style.left = centerPosition.left;
    }, 10);

    setTimeout(() => {
        nameElement.style.transition = 'all 1s ease';
        nameElement.style.top = startPosition.top;
        nameElement.style.left = startPosition.left;
        nameElement.style.opacity = 0;
    }, 3000);

    currentIndex = (currentIndex + 1) % names.length;
    setTimeout(showName, 4000);
}

function getStartPosition(direction) {
    const startPosition = {
        top: '-40%',
        left: '40%'
    };
    switch (direction) {
        case 'top':
            startPosition.top = '-100%';
            startPosition.left = '50%';
            break;
        case 'right':
            startPosition.top = '10%';
            startPosition.left = '110%';
            break;
        case 'bottom':
            startPosition.top = '50%';
            startPosition.left = '50%';
            break;
        case 'left':
            startPosition.top = '-70%';
            startPosition.left = '-10%';
            break;
    }
    return startPosition;
}

function getCenterPosition() {
    return {
        top: '-40%',
        left: '40%'
    };
}

showName();
