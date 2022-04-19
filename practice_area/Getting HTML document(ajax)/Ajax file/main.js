function getText(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','../index.html',true);

    if(xhr.readyState < 4){
        const output = document.querySelector('#essay-area');

        output.textContent = 'Please Wait!'
    }
    xhr.onload = function (){
       if(xhr.status === 200){
            const output = document.querySelector('#essay-area'); 
            const text = document.querySelector('#catcher');
            text.innerHTML = xhr.responseText;
            
            const target = text.children.item(4);
            output.textContent = target.textContent;
            
       }else{
           console.warn('Something went wrong')
       }
    };
    xhr.send();
};
getText();

