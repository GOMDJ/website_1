const display = document.getElementById('display')

function add_number(num){
    if(display.textContent === '0'){
        display.textContent = num;
    }   else{
        display.textContent += num;
    }
};
document.getElementById('num1').onclick = function(){
    add_number('1');
};
document.getElementById('num2').onclick = function(){
    add_number('2');
};
document.getElementById('num3').onclick = function(){
    add_number('3');
};
document.getElementById('num4').onclick = function(){
    add_number('4');
};
document.getElementById('num5').onclick = function(){
    add_number('5');
};
document.getElementById('num6').onclick = function(){
    add_number('6');
};
document.getElementById('num7').onclick = function(){
    add_number('7');
};
document.getElementById('num8').onclick = function(){
    add_number('8');
};document.getElementById('num9').onclick = function(){
    add_number('9');
};

document.getElementById('clear').onclick = function(){
    display.textContent = '0';
};
document.getElementById('plus').onclick = function(){
    add_number('+');
};
document.getElementById('minus').onclick = function(){
    add_number('-');
};
document.getElementById('multiply').onclick = function(){
    add_number('*');
};
document.getElementById('divide').onclick = function(){
    add_number('/');
};


document.getElementById('equals').onclick = function(){
    try{
        const result = eval(display.textContent);
        display.textContent = result;
    } catch(error){
        display.textContent = '오류';
        }
};