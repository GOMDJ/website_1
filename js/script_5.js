const display = document.getElementById('display')

/*  
    textContent : html요소의 속성. display.textContent하면 display의 내용 읽음
    document : html 전체 문서 나타내는 객체
    getElementById : Id로 요소 가져오기. document.getElementById('display')하면 html전체 문서에서 display라는 id가진 요소 가져옴
    === : 값&타입 비교, == 값만 비교, = 값 넣기
    변수 선언시 let(타입 구분 안함), 매개변수는 let도 안 적음.
    eval('문자열') : 문자열을 자바스크립트 코드로 실행시켜줌. 즉석에서 실행
*/
/* 
    만약 display.textContent의 값이 0이라면(초기 상태 이거나, C 버튼을 눌렀을 때), display.textContent에 num값을 집어넣는다.
    그게 아니면, 기존에 있던 display.textContent에 num값을 이어붙인다.(display.textContent 이건 문자열이기 때문에 이어붙임.)
    try{
    }
    catch(error)
*/
function add_number(num){
    if(display.textContent === '0'){
        display.textContent = num;
    }   else{
        display.textContent += num;
    }
};
/*html전체 문서에서 num1이란 아이디를 가진 요소가 클릭이 되면, add_number(num)함수의 매개변수에 1을 할당하는 함수를 작동시킴*/
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

/*
    equals라는 id를 가진 요소가 눌려지면 아래 함수를 작동시킨다.
    display.textContent라는 문자열을 더하고 이 값을 result에 넣고 display에 띄울 때 오류가 발생하면('1++2'), 오류 텍스트를 띄운다.
*/
document.getElementById('equals').onclick = function(){
    try{
        const result = eval(display.textContent);
        display.textContent = result;
    } catch(error){
        display.textContent = '오류';
        }
};