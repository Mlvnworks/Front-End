const budget=document.querySelector('#budget');
const shares=document.querySelector('#share');
const rating=document.querySelector('#rate');
const result=document.querySelector('#total')
let total;

const calculate=document.querySelector('#button-area');

 calculate.addEventListener('click', () => {
   if(rating.value == 1 && parseInt(shares.value) > 1){ 
       let multiply =budget.value * 0.10  / shares.value ;
       let divide= multiply  * 0.10  ;

       total=divide  ;
       result.innerHTML= `${total} php`;
       
    
}
else if(rating.value == 2 && parseInt(shares.value) > 1){ 
    let multiply =budget.value * 0.15  / shares.value ;
    let divide= multiply  * 0.15  ;

    total=divide ;
    result.innerHTML= `${total} php`;
    
 
}else if(rating.value == 3 && parseInt(shares.value) > 1){ 
    let multiply =budget.value * 0.20  / shares.value ;
    let divide= multiply  * 0.20  ;

    total=divide ;
    result.innerHTML= `${total} php`;
    
 
}else if(rating.value == 4 && parseInt(shares.value) > 1){ 
    let multiply =budget.value * 0.25  / shares.value ;
    let divide= multiply  * 0.25  ;

    total=divide ;
    result.innerHTML= `${total} php Each`;
    
 
}
else if(rating.value == 5 && parseInt(shares.value) > 1){ 
    let multiply =budget.value * 0.30  / shares.value ;
    let divide= multiply  * 0.30  ;

    total=divide ;
    result.innerHTML= `${total} php Each`;
    
 
}
else if(shares.value == 1 && rating.value == 5){ 
     let multiply =budget.value * 0.25  / shares.value ;
     let divide= multiply  * 0.25  ;

    total=divide ;
     result.innerHTML= `${total} php`;
    
 
 }
 else if(shares.value == 1 && rating.value == 4){ 
    let multiply =budget.value * 0.20  / shares.value ;
    let divide= multiply  * 0.20  ;

   total=divide ;
    result.innerHTML= `${total} php`;
   

}
else if(shares.value == 1 && rating.value == 3){ 
    let multiply =budget.value * 0.15  / shares.value ;
    let divide= multiply  * 0.15  ;

   total=divide ;
    result.innerHTML= `${total} php`;
   

}
else if(shares.value == 1 && rating.value == 2){ 
    let multiply =budget.value * 0.10  / shares.value ;
    let divide= multiply  * 0.10  ;

   total=divide ;
    result.innerHTML= `${total} php`;
   

} 
else if(shares.value == 1 && rating.value == 1){ 
    let multiply =budget.value * 0.05  / shares.value ;
    let divide= multiply  * 0.05  ;

   total=divide ;
    result.innerHTML= `${total} php`;
   

}       

    
}) 

