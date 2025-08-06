const display = document.getElementById('display');
document.getElementById('num0').onclick = () => appendToDisplay('0');
document.getElementById('num1').onclick = () => appendToDisplay('1');

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}