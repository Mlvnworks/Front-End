const firstName=document.querySelector('#firstName');

const setButton=document.querySelector('#set');
setButton.addEventListener('click', function(){
    localStorage.setItem('fName' , firstName.value)
});

const getButton=document.querySelector('#get')
getButton.addEventListener('click' , function(){
    const get=localStorage.getItem('fName');
// listing
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(get))
    const list=document.querySelector('#list')
    list.appendChild(li);
})