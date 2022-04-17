//REPORTS ADDING
const textArea=document.querySelector('#text-area');
const addBtn=document.querySelector('#submit');
const reports=document.querySelector('#reports');
const msg=document.querySelector('#msg');
const formText=document.querySelector('small');
const timePost=new Date();
//CLEAR ALL FUNCTION
let ts=false;
const clearAll=document.querySelector('#clear-all');

//DELETE each area
reports.addEventListener('click',e=>{
    if(e.target.classList.contains('del')){
        if(confirm('areyou sure you want to delete this report?')){
            e.target.parentElement.remove();
        }
        
    }
})
// part of sticky nav
const max=document.querySelector('#d');

// EVENTS
//CLEAR ALL AREA
clearAll.addEventListener('click',()=>{
    const rep=document.querySelectorAll('#reports > li');
    if(ts==true){
        if(confirm('are you sure you want to delete all?')){

            rep.forEach(report => {
                report.remove();
                msg.textContent="No Report To Show";
                ts=false;
            });
        }
        
    }
    
})
// REPORTS ADDING AREA
addBtn.addEventListener('click', ()=>{
    if(textArea.value == ""){
        textArea.classList.add('is-invalid');
        formText.classList.add('invalid-feedback');
        formText.textContent='plss enter report field';
    }else{
        ts=true;
        const li=document.createElement('li');
        li.className='report';
        li.innerHTML=`${textArea.value}<button class="btn btn-sm btn-outline-danger del">X</button><p class="text-end">-${timePost.getHours()}:${timePost.getMinutes()}</p>`

        reports.prepend(li);

        // CLEAR INPUT 
        textArea.value="";
        //REMOVED WARNING
        textArea.classList.remove('is-invalid');
        formText.classList.remove('invalid-feedback');
        formText.textContent='Enter reports';

        if(li){
            msg.textContent=""
        }else{
            msg.textContent="No Report To Show";
        }

        
    }
    

})

//STICKY NAV


