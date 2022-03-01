var result=0;
var select_sound = new Audio('sounds/pop.mp3');
var found_sound = new Audio('sounds/found.mp3')
document.getElementById("instruction").style.display = "none";

function found1(argument) {
window.result += 1;
checkmate()
document.getElementById('btn1').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}
function found2(argument) {
window.result += 2;
checkmate()
document.getElementById('btn2').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}
function found3(argument) {
window.result += 3;
checkmate()
document.getElementById('btn3').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}
function found4(argument) {
window.result += 4;
checkmate()
document.getElementById('btn4').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}
function found5(argument) {
window.result += 5;
checkmate()
document.getElementById('btn5').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}
function found6(argument) {
window.result += 6;
checkmate()
document.getElementById('btn6').innerHTML = "Ok!";
select_sound.play();
select_sound.currentTime = 0;
}

function inst(argument) {

document.getElementById("instruction").style.display = "";
document.getElementById("btn-htp").style.display = "none";

	
}
//result

/*6.london
11.mumbai
12.chennai
14.paris
10.wuhan
15.america
9.delhi
13.thailand*/


function checkmate(argument) {
if (result==6) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: LONDON";
}else if (result==11) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: MUMBAI";
}else if (result==12) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: CHENNAI";
}else if (result==14) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: PARIS";
}else if (result==10) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: WUHAN";
}else if (result==15) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: AMERICA";
}else if (result==9) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: DELHI";
}else if (result==13) {
found_sound.play();
found_sound.currentTime = 0;
document.getElementById('display').innerHTML = "&#128302;: THAILAND";
}

}