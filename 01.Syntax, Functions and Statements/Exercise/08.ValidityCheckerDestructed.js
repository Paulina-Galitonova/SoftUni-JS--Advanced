// Основна функция, която изчислява разстоянието между две точки
function calculateDistance(x1, y1, x2, y2) {
    // Функция, която проверява дали разстоянието между две точки е цяло число
    function isDistanceValid(x1, y1, x2, y2) {
        // Изчисляваме квадрата на разстоянието по x и y
        const xSquared = Math.pow(x2 - x1, 2);
        const ySquared = Math.pow(y2 - y1, 2);
        // Сборът от квадратите
        const sumOfSquares = xSquared + ySquared;
        // Изчисляваме квадратния корен от сбора
        const distance = Math.sqrt(sumOfSquares);
        // Проверяваме дали разстоянието е цяло число
        return Number.isInteger(distance);
    }

    // Функция, която извежда валидността на разстоянието на конзолата
    function printValidity(point1, point2) {
        // Проверяваме валидността и извеждаме съобщение
        const isValid = isDistanceValid(...point1, ...point2);
        console.log(`{${point1.join(', ')}} to {${point2.join(', ')}} is ${isValid ? 'valid' : 'invalid'}`);
    }

    // Извеждаме валидността за разстоянието между {x1, y1} и {0, 0}
    printValidity([x1, y1], [0, 0]);
    // Извеждаме валидността за разстоянието между {x2, y2} и {0, 0}
    printValidity([x2, y2], [0, 0]);
    // Извеждаме валидността за разстоянието между {x1, y1} и {x2, y2}
    printValidity([x1, y1], [x2, y2]);
}

// Пример за използване на функцията с конкретни стойности за координати
calculateDistance(3, 0, 0, 4);
