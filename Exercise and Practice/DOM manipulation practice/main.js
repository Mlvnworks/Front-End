const form=document.querySelector('#my-form');
const input=document.querySelector('.text-input');
const ul=document.querySelector('#items');
const clear=document.querySelector('#clear');
const message=document.querySelector('#msg');
const msgContainer=document.querySelector('#msg-container');
const searchBar=document.querySelector('#search');

searchBar.addEventListener('keyup', filter );
clear.addEventListener('click', clearAll)
ul.addEventListener('click',deleteItems)

form.addEventListener('submit' ,submit);

function submit(e){
    e.preventDefault();
    if(input.value === "" ){
        alert('Please Add Input Text')
    }else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    const delBtn=document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'))
    delBtn.className='del-btn';

    ul.appendChild(li)
    li.appendChild(delBtn)
    
    // CLEAR INPUT-AREA
    input.value="";
    
    // CLEAR MSG
    message.remove();
    }
}

function deleteItems(e){
    if(e.target.classList.contains('del-btn')){
        if(confirm('Are You Sure?')){
            const li= e.target.parentElement;
            ul.removeChild(li);
            
        }
    }
}

function clearAll(){
    if(confirm('Do you Want to Delete All?')){
    const li=document.querySelectorAll('li');
    for(i=0 ; i < li.length ; i++){
        li[i].remove();
        location.reload();
        // msgContainer.innerHTML='<span id="msg">list Is Empty</span>';
        
    }
    }
}

function filter(e){
    const keyword=e.target.value.toLowerCase();
    const lists =ul.getElementsByTagName('li');
    Array.from(lists).forEach(function(list){
        // console.log(list)
        const itemName=list.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(keyword) != -1){
            list.style.display='block';
        }else{
        list.style.display='none';
        }
    })
    


    // console.log(e.target.value.toLowerCase())
}