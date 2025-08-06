const title = document.getElementById('title'); // getElementById : 특정 아이디를 가진 요소 찾기
const button = document.getElementById('button'); 
const text = document.querySelector('.text'); // querySelector : class 찾기, .붙임

button.onclick = function(){
    title.textContent = '쪠목';
    text.textContent = '뗶쓰뜨';
    text.style.color = 'red';
};

console.log(title); // title의 콘솔 로그 띄워줌, 오류 확인 위해 개발 중에만 사용
