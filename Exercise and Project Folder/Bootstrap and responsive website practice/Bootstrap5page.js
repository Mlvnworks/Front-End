const userQuestion=document.querySelector('#uq');
const askBtn=document.querySelector('#ask-btn');
const sendQuestion=document.querySelector('#question-output');
const stickStart=document.querySelector('#stick-start');
const nav=document.querySelector('#nav-sticky');


//question output
askBtn.addEventListener('click',()=>{
    sendQuestion.value=userQuestion.value;
})

//sticky nav
function navStick(scroll){
    if(window.scrollY >= stickStart.offsetTop){
        nav.style.display='block';
    }else{
        nav.style.display='none';
    }
}
