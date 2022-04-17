function set(){
    const fName=document.querySelector('#firstName');
    const lName=document.querySelector('#lastName');

    sessionStorage.setItem('first-name' , fName.value);
    sessionStorage.setItem('last-name' , lName.value);
}


function get(){
    const time=new Date();
    const hours=time.getHours();
    if(hours > 18){
        
        const fName=document.querySelector('#firstName');
    const lName=document.querySelector('#lastName')
    fName.value="";
    lName.value="";
    
    const display=sessionStorage.getItem('first-name');
    const display1=sessionStorage.getItem('last-name');
    const output=document.querySelector('#data');
    output.innerHTML=`Good Night! ${display}  ${display1} And Have A Sweet Dreams <3!`;
    }else{
        const fName=document.querySelector('#firstName');
        const lName=document.querySelector('#lastName')
        fName.value="";
        lName.value="";
        
        const display=sessionStorage.getItem('first-name');
        const display1=sessionStorage.getItem('last-name');
        const output=document.querySelector('#data');
        output.innerHTML=`Good Morning! ${display}  ${display1} Lets Have A productive Day <3!`;

    }

    
}
function remove(){
    const output=document.querySelector('#data');
    output.innerHTML="";
}


    



