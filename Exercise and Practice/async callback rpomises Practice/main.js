let posts = [
    
];

function output(){
    const list=document.querySelector('#list');
        posts.forEach(post=>{
            let li = document.createElement('li');
            li.innerHTML=`
            <h2>title:${post.title}</h2>
            <br>
             Body:${post.body}
             `;

            list.append(li);
        })
};
function addPost(post){
    return new Promise((resolve,reject)=>{
        post.forEach(data=>{
            posts.push(data);

            let err=false;
            if(!err){
                resolve()
            }else{
                reject('something went wrong while getting the posts');
            }
        })
    })
};
async function init(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const responseData = await response.json();
    await addPost(responseData);

    output();
};

init()
    .catch(err=> console.log(err));
