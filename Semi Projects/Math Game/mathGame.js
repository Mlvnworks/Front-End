//Asingning Needed Variable
let eq1 = Math.floor(Math.random() * 1001);
let eq2 = Math.floor(Math.random() * 1001);
let result = eq1 + eq2;
let random = Math.floor(Math.random() * 1001);
let randomPick = Math.floor(Math.random() * 101);
let countDown = 30;
//Getting Elements In DOM
const restart = document.querySelector('#restart-btn');
const firstBtn = document.querySelector('#result-1');
const played = document.querySelector('#played');
const secondBtn = document.querySelector('#result-2');
const startBtn = document.querySelector('#start-btn');
//Asingning Correct and Wrong
let correct = 0;
let wrong = 0;
//Adding Events needed
firstBtn.addEventListener('click',tryAns);
secondBtn.addEventListener('click',tryAns);
startBtn.addEventListener('click',startMath)
restart.addEventListener('click',() => location.reload());
//Showing The Result at DOM
function showResult(r,w){
    const score = document.querySelector('#score');
    const solved = document.querySelector('#result-solved');
    const failed = document.querySelector('#result-failed');
    const scoreTotal = r - w;

    if(scoreTotal < 0){
        score.textContent = 0;
        solved.textContent = r;
        failed.textContent = w;
    }else{
        score.textContent = r - w;
        solved.textContent = r;
        failed.textContent = w;
    }
};
//Finishing The Game
function endPlay(){
    const endPlay = document.querySelector('#endPlay')
    played.style.display = 'none';
    endPlay.style.display = 'block';
};
//Starting The Game
function startMath(){
    const start = document.querySelector('#start');
    start.style.display = 'none';
    played.style.display = 'block';
    //Updating CountDown (reduce from 30 seconds to 0)
    setInterval(() => {
        countDown--;
        const disCountDown = document.querySelector('#countDown').textContent= countDown;
        const timeOut = document.querySelector('#time-out');
        //Count Down Alert and running endPlay fnction 
        if(countDown <= 0 ){
            endPlay();
            disCountDown.textContent = 30;
        }else if(countDown >= 6 && countDown <= 10){
            timeOut.classList.remove('text-success');
            timeOut.classList.add('text-warning');
        }else if(countDown <= 5){
            timeOut.classList.remove('text-warning');
            timeOut.classList.add('text-danger');
        }
    },1000)
}
//calculation and Operation
const displayEq = () => {
    //Updating math Problem
     eq1 = Math.floor(Math.random() * 1001);
     eq2 = Math.floor(Math.random() * 1001);
     result = eq1 + eq2;
     random = Math.floor(Math.random() * 1001);
     randomPick = Math.floor(Math.random() * 101);
     //Asingning varibles to DOM elements
    const success = document.querySelector('#solved');
    const failed = document.querySelector('#failed');
    document.querySelector('#equation').textContent= `${eq1} + ${eq2} = ?`
    //Answer Positioning
    if(random > 500){
        secondBtn.textContent = result - randomPick;
        firstBtn.textContent = result;
    }else{
        firstBtn.textContent = result + randomPick;
        secondBtn.textContent = result;
    };
    //Solved Count and Failed Count
    success.textContent = `Solved:${correct}`;
    failed.textContent = `Failed:${wrong}`;
};
//Validating Answer
function tryAns(btn){
    const content = btn.target.textContent;
    //Calculating Correct and Wrong
    if(content == result){
        correct++;
    }else{
        wrong++;
    };
    //Passing Correct and Wrong to showResult Function
    showResult(correct,wrong);
    //Running diplayEq function
    displayEq();
};
//Running diplayEq function after the page load
displayEq();




