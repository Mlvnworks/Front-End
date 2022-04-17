document.querySelector('#btn').addEventListener('click',()=>{
    const xhr= new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

    xhr.onprogress = function (){
        const userList = document.querySelector('#list');

        userList.innerHTML=`
        <li id="loading-msg">Please Wait!</li>
        `
    }
    xhr.onload= function(){
        if(this.status == 200){
            const loadMsg=document.querySelector('#loading-msg')
            loadMsg.remove();

            const users=JSON.parse(this.responseText);

            users.forEach(user=>{
                const userList = document.querySelector('#list');

                userList.innerHTML +=`
                    <li style="padding:10px;margin-bottom:10px;background-color:'lightgray;">
                        Name: ${user.name}
                        Username: ${user.username}
                        Email: ${user.email}
                        Phone: ${user.phone}
                        <br>
                        full Address: ${user.address.street},${user.address.suite},
                        ${user.address.city}
                    </li>
                `
            })
        }
    }

    xhr.send();
})