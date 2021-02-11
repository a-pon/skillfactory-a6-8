const progressBar = document.querySelector('.progress-bar');

let progressValue = 0;

const btn1 = document.querySelector('.jbtn1');
const btn2 = document.querySelector('.jbtn2');
const btn3 = document.querySelector('.jbtn3');

function addPercent(n) {
	progressValue + n < 100 ? progressValue += n : progressValue = 100;
	progressBar.setAttribute('style', `width: ${progressValue}%`)
	progressBar.innerText = progressValue + "%";
}

btn1.addEventListener('click', function(){addPercent(1)});
btn2.addEventListener('click', function(){addPercent(3)});
btn3.addEventListener('click', function(){addPercent(7)});