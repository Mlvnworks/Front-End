function getSubs(){
    const showSubs = document.querySelector('#subs');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','practice.html');
    if(xhr.readyState < 4){
        showSubs.textContent = 'Please Wait!';
    };
    xhr.onload = function(){
        if(xhr.status === 200){
            showSubs.innerHTML = xhr.responseText;
        }else{
            showSubs.textContent = 'Something went wrong please try again';
        }
    }
    xhr.send();
};
getSubs();