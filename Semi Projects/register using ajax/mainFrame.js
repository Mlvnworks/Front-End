const xhr = new XMLHttpRequest();
let registeredPerson = [];

if (localStorage.getItem('person')){
    const storedUser = JSON.parse(localStorage.getItem('person'))
    registeredPerson = storedUser;
    console.log('hello')
};
const starsRegis = {
    firstName: '',
    lastName: '',
    middleName: '',
    personInfo: {
        birthDate: '',
        gender: '',
        status: ''
    },
    address: {
        brgy: '',
        municipal: '',
        province: '',
        postalCode: ''
    }
};
// UserConstructor
class UsersBasicInfo{
    constructor(firstName,lastName,middleName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;

        starsRegis.firstName = this.firstName;
        starsRegis.lastName = this.lastName;
        starsRegis.middleName = this.middleName;
    }
};
class UserPersonalInfo{
    constructor(birthDate,gender) {
        this.bd = birthDate;
        this.g = gender;


        starsRegis.personInfo.birthDate = this.bd;
        starsRegis.personInfo.gender = this.g;
    }
};
class UserAddress{
    constructor(brgy,municipal,province,code) {
        this.brgy = brgy;
        this.m = municipal;
        this.p = province;
        this.c = code;

        starsRegis.address.brgy = this.brgy;
        starsRegis.address.municipal = this.m;
        starsRegis.address.province = this.p;
        starsRegis.address.postalCode = this.c;
    };
};
const err = document.querySelector('#err');
const formSection = document.querySelector('#form-area');
const msgArea = document.querySelector('#msg-area');
const nextBtn = document.querySelector('#nxt');
var stage = 1;

//registering
function registeredP() {
    err.remove();
    registeredPerson.push(starsRegis);
    const registered = document.querySelector('#registering');
    const msg =document.querySelector('#wMsg');
    setInterval(() => registered.classList.toggle('toggler'),1000);

    setTimeout(() => {
        localStorage.setItem('person',JSON.stringify(registeredPerson));
        msg.textContent = "Registered";
        registered.remove();
    },5000)

    setTimeout(() => {
        location.reload();
    },6000)

};
// complete form
function completeForm() {
    err.remove();
    // basic info
    const fName = formSection.children.item(0).children.item(1).children.item(0).children.item(3);
    const lName = formSection.children.item(0).children.item(1).children.item(0).children.item(6);
    const mName = formSection.children.item(0).children.item(1).children.item(0).children.item(9);
    // additinal info
    const bDate = formSection.children.item(0).children.item(1).children.item(1).children.item(3);
    const gender = formSection.children.item(0).children.item(1).children.item(1).children.item(6);
    const status = formSection.children.item(0).children.item(1).children.item(1).children.item(9);
    // address info
    const brgy = formSection.children.item(0).children.item(1).children.item(2).children.item(3);
    const municipal = formSection.children.item(0).children.item(1).children.item(2).children.item(6);
    const province = formSection.children.item(0).children.item(1).children.item(2).children.item(9);
    const pCode = formSection.children.item(0).children.item(1).children.item(2).children.item(12);

    //Apply basicinfo
    fName.value = starsRegis.firstName;
    lName.value = starsRegis.lastName;
    mName.value = starsRegis.middleName;
    // Apply additional info
    bDate.value = starsRegis.personInfo.birthDate;
    gender.value = starsRegis.personInfo.gender;
    //Apply Address info
    brgy.value = starsRegis.address.brgy;
    municipal.value = starsRegis.address.municipal;
    province.value = starsRegis.address.province;
    pCode.value = starsRegis.address.postalCode;
    // btn text
    nextBtn.textContent = "Complete";
    nextBtn.addEventListener('click', () => {
        changeForm(true,true,true,true,);
    })
}
// reFirstForm 3
function regFirstForm3 () {
    const brgy = formSection.children.item(1);
    const municipal = formSection.children.item(4);
    const province = formSection.children.item(7);
    const code = formSection.children.item(10);

    nextBtn.addEventListener('click', () => {
        if (brgy.value === ""|| municipal.value === "" || province.value === "" || code.value === "") {
            showERR();
        }else {
            new UserAddress(brgy.value,municipal.value,province.value,code.value);
            changeForm(true,true,true,false);
        }
    })
}
// RegFirstForm 2
function regFirstForm2 () {
    const birthDate = formSection.children.item(1);
    const gender = formSection.children.item(4);

    nextBtn.addEventListener('click', () => {
        if (birthDate.value === "" || gender.value === "") {
            showERR();
        }else {
            new UserPersonalInfo(birthDate.value,gender.value);
            changeForm(true,true,false,false);
        }
    })
}
// RegFirstForm 1
function regFirstForm1() {
    
    const firstName = formSection.children.item(1);
    const lastName = formSection.children.item(4);
    const middleName = formSection.children.item(7)

    nextBtn.addEventListener('click',() => {
        
        if (firstName.value === "" || lastName.value === "" || middleName.value === "") {
            showERR();
        }else {
            const basicIn = new UsersBasicInfo(firstName.value,lastName.value,middleName.value);
            changeForm(true,false,false,false);
        }
    })
    
};
// Show ERR 
function showERR () {
    err.style.display = "block";
    setTimeout(() => err.style.display = "none",3000);
};
// stage
function changeForm(form1,form2,form3,complete){
    if(form1 && !form2 && !form3 && !complete) {
        stage = 2;
    }else if (form1 && form2 && !form3 && !complete) {
        stage = 3;
    }else if (form1 && form2 && form3 && !complete) {
        stage = 4;
    }else if (form1 && form2 && form3 && complete) {
        stage = 5;
    }
    
    if (stage === 2) {
        showForm2();
    }else if(stage === 3) {
        showForm3();
    }else if (stage === 4) {
        dobCheck();
    }else if (stage === 5) {
        registered();
    };
};
// Loading msg
function loading(){
    msgArea.classList.remove('d-none');
}
// 
function registered () {
    xhr.open('GET','stage/Complete Stage/registered.html',true);
    if(xhr.readyState < 4) {
        loading();
    };
    xhr.onload = function () {
        if( xhr.status === 200){
            msgArea.classList.add('d-none');
            nextBtn.remove();
            formSection.innerHTML = xhr.response;
            registeredP();
        }else {
            formSection.innerHTML = "something went wrong";
        }
    };
    xhr.send();
}
//dobCheck
function dobCheck() {
    xhr.open('GET','stage/Complete Stage/completeStage.html',true);

    if (xhr.readyState < 4) {
        loading();
    };
    xhr.onload = function(){
        if(xhr.status === 200){
            msgArea.classList.add('d-none');
            formSection.innerHTML = xhr.responseText;
            completeForm();
        }else{
            formSection.innerHTML = "something went wrong";
        };
    };
    xhr.send();
}
// THIRD FORM
function showForm3() {
    xhr.open('GET','stage/thirdStage.html',true);
    if(xhr.readyState < 4){
        loading();
    };

    xhr.onload = function(){
        if(xhr.status === 200){
            msgArea.classList.add('d-none');
            formSection.innerHTML = xhr.responseText;
            regFirstForm3();
        }else{
            formSection.innerHTML = "something went wrong";
        };
    };
    xhr.send();
};
// SECOND FORM
function showForm2() {
    xhr.open('GET','stage/secondStage.html',true);

    if(xhr.readyState < 4){
        loading();
    };

    xhr.onload = function(){
        if(xhr.status === 200){
            msgArea.classList.add('d-none');
            formSection.innerHTML = xhr.responseText;
            regFirstForm2();
        }else{
            formSection.innerHTML = "something went wrong";
        };
    };
    xhr.send();
};
// fIRST FORM
function showForm1() {
    xhr.open('GET','stage/firstStage.html',true);

    if(xhr.readyState < 4){
        loading();
    };

    xhr.onload = function(){
        if(xhr.status === 200){
            msgArea.classList.add('d-none');
            formSection.innerHTML = xhr.responseText;
            regFirstForm1();
        }else{
            formSection.innerHTML = "something went wrong";
        };
    };
    xhr.send();
};

showForm1();