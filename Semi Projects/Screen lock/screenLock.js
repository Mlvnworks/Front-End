const xhr = new XMLHttpRequest();
const btns = document.querySelector('#num-btns');
const donedBtn = document.querySelector('#btn-done');
const input = document.querySelector('#input-lock');
const rPassword = document.querySelector('#fp');
const placer = document.querySelector('#reset-password');
const delBtn = document.querySelector('#btn-delete');
let password;
if (localStorage.getItem('password')) {
    const catchPass = localStorage.getItem('password');
    password = catchPass;
};

delBtn.addEventListener('click',() => input.value = "");
btns.addEventListener('click', inputNum);
donedBtn.addEventListener('click',testInput);
rPassword.addEventListener('click',resPassword);

function cathXhr(res) {
    placer.innerHTML = res;
    placer.style.display = "block";

    const cancelBtn = document.querySelector('#cancel-btn');
    const rPContainer = document.querySelector('.rP-container');
    const donedBtn = document.querySelector('#doned-btn');
    const newPassInput = document.querySelector('#new-pass');
    const alert = document.querySelector('#msg');

    cancelBtn.addEventListener('click', () => {
       placer.style.display = 'none';
    });

    newPassInput.addEventListener('input',e => {
        if (e.target.value.includes('-')) {
            newPassInput.value = "0";
        };
    });

    newPassInput.addEventListener('blur',e => {
        newPassInput.style.outline = "2px black solid;";
    });

    donedBtn.addEventListener('click', () => {
        const testNewPass = () => {
            if(newPassInput.value.length === 4) {
                return newPassInput.value;
            }else{
                return false;
            };
        };

        if (!testNewPass()) {
            alert.textContent = "password must be 4 digits";
            newPassInput.style.outline = "3px solid red";
            
        }else {
            localStorage.setItem('password',testNewPass());
            location.reload();

        };
    })
};

function resPassword() {
    xhr.open('GET','Reset Password/newPass.html',true);
    if(xhr.readyState < 4) {
        
    };
    xhr.onload = function(){
        if(xhr.status === 200) {
            placer.style.display = 'block';
            cathXhr(xhr.response);
        }else{
            console.log('Something went wrong!');
        };
    };
    xhr.send();
};
function inputNum(e){
    if(e.target.classList.contains('btn-lock')) {
        const btn = e.target.textContent;
        input.value += btn;
        if(input.value.length >= 4) {
            testInput(input);
        };
    };
};
function testInput(input) {
    if (input.value !== password) {
        const alert = document.querySelector('#alert');

        alert.textContent = "wrong password!";
        alert.style.color = "red";

        setTimeout(() => {
            input.value = "";
            alert.textContent = "Unlock Password"
            alert.style.color = "gray";
        }
        ,500);
    }else{
        const alert = document.querySelector('#alert');
        alert.textContent = "Password Unlock!";
        alert.style.color = "green";

        setTimeout(() => {
            location.href = 'https://www.nzonscreen.com/content/images/0028/0534/12574.KEY.jpg.jpg';
        },500);
    };

};

