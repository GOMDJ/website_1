const display = document.getElementById('display');
const button1 = document.getElementById('num1');

button1.onclick = function(){
    display.textContent = '1'
};

document.getElementById('num2').onclick = function(){
    display.textContent = '2'
}

