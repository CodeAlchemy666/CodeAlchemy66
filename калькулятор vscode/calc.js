let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// Экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').addEventListener('click', clearAll);

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (finish) {
            clearAll();
        }

        if (sign === '') {
            a += key;
            out.textContent = a;
        } else {
            b += key;
            out.textContent = b;
        }
    }

    if (action.includes(key)) {
        if (a !== '' && b === '') {
            sign = key;
            out.textContent = sign;
        } else if (a !== '' && b !== '') {
            calculate();
            a = out.textContent; // Присваиваем результат вычисления первому числу
            b = ''; // Сбрасываем второе число
            sign = key; // Устанавливаем новый знак операции
        }
    }

    if (key === '=') {
        if (a !== '' && b !== '') {
            calculate();
            a = out.textContent; // Присваиваем результат вычисления первому числу
            b = ''; // Сбрасываем второе число
            sign = ''; // Сбрасываем знак операции
        }
    }
});

function calculate() {
    let result;
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (sign === '+') {
        result = num1 + num2;
    } else if (sign === '-') {
        result = num1 - num2;
    } else if (sign === 'X') {
        result = num1 * num2;
    } else if (sign === '/') {
        if (num2 === 0) {
            result = 'Ошибка';
        } else {
            result = num1 / num2;
        }
    }

    out.textContent = result;
}

