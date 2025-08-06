const display = document.getElementById('display');

// 숫자 버튼들 이벤트 연결
document.getElementById('num0').onclick = () => appendToDisplay('0');
document.getElementById('num1').onclick = () => appendToDisplay('1');
document.getElementById('num2').onclick = () => appendToDisplay('2');
document.getElementById('num3').onclick = () => appendToDisplay('3');
document.getElementById('num4').onclick = () => appendToDisplay('4');
document.getElementById('num5').onclick = () => appendToDisplay('5');
document.getElementById('num6').onclick = () => appendToDisplay('6');
document.getElementById('num7').onclick = () => appendToDisplay('7');
document.getElementById('num8').onclick = () => appendToDisplay('8');
document.getElementById('num9').onclick = () => appendToDisplay('9');

// 연산자 버튼들
document.getElementById('plus').onclick = () => appendToDisplay('+');
document.getElementById('minus').onclick = () => appendToDisplay('-');
document.getElementById('multiply').onclick = () => appendToDisplay('*');
document.getElementById('divide').onclick = () => appendToDisplay('/');
document.getElementById('dot').onclick = () => appendToDisplay('.');

// 기능 버튼들
document.getElementById('clear').onclick = clearDisplay;
document.getElementById('delete').onclick = deleteLast;
document.getElementById('equals').onclick = calculate;

// 함수들
function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = '오류';
    }
}