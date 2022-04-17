const textInput=document.querySelector('#text-input');
const save=document.querySelector('.btn');
const list=document.querySelector('ol > li')
const ul=document.querySelector('ol');
const display = localStorage.getItem('text');

list.textContent=display;

save.addEventListener('click', saved);
function saved(){
    localStorage.setItem('text',textInput.value);

    location.reload();
}



