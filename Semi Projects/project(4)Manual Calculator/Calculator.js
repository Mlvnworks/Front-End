var result;


function pluss(){
    const up=  document.querySelector('#fn');
    const lp= document.querySelector('#sn');
    const add=parseInt(up.value) + parseInt(lp.value);

    result=add;
    
}
function multiplication(){
    const up=  document.querySelector('#fn');
    const lp= document.querySelector('#sn');
    const multiply=parseInt(up.value) * parseInt(lp.value);

    result=multiply;
    
}
function division(){
    const up=  document.querySelector('#fn');
    const lp= document.querySelector('#sn');
    const divide=parseInt(up.value) / parseInt(lp.value);

    result=divide;
    
}
function subtraction(){
    const up=  document.querySelector('#fn');
    const lp= document.querySelector('#sn');
    const minus=parseInt(up.value) - parseInt(lp.value);

    result=minus;
    
}
function clr(){
    location.reload();
   
}
function output(){
    const up=  document.querySelector('#fn');
    const lp= document.querySelector('#sn');
    if(up.value==="" || lp.value===""){
        alert('fill the equation')
    }else{
    
    const answer=document.querySelector('#ans');
    answer.innerHTML=result;
}
}
