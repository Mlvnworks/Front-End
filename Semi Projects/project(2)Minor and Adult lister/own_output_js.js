
const usersName=document.querySelector('#full-name');
const usersAge=document.querySelector('#age');
const usersGender=document.querySelector('#gender');
const mainForm=document.querySelector('#my-form');
const Name=document.querySelector('#userFullName')
const msg=document.querySelector('#msg')
const msg2=document.querySelector('#msg2')
let Li=document.createElement('li');


mainForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

 if(usersName.value === ""){
       msg.innerHTML=`input valid Full Name`;
       msg.classList.add('erorr')

       setTimeout(()=>msg.remove(),3000)

}
//user age
else if(usersAge.value === "" || usersAge.value <= 0){
    msg2.innerHTML=`Input valid age`;
    msg2.classList.add('erorr');
    setTimeout(()=> msg2.remove(),3000)
}
else if(usersAge.value < 18){
    //for Name
    const minor='Minor'
    let Li=document.createElement('li');
    Li.appendChild(document.createTextNode(` name: ${usersName.value}   |  age:${usersAge.value}   |  Gender:${usersGender.value} | Member:${minor}`));
    
    Name.appendChild(Li);
   
    //clear fields
    usersName.value='';
    usersAge.value='';
    
    
    
}else{
    const adult='Adult'
    let Li=document.createElement('li');
     Li.appendChild(document.createTextNode(` name: ${usersName.value}   |  age:${usersAge.value}   |  Gender:${usersGender.value} | Member:${adult}`));
     
     Name.appendChild(Li);
    
     //clear fields
     usersName.value='';
     usersAge.value='';
}
}

const clear=document.querySelector('#clear');

clear.addEventListener('click',clearAll);

function clearAll(){
    location.reload()
}













 

