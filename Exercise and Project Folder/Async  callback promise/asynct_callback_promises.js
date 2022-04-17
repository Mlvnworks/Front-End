let updates=[{
    site:'facebook',
    like:'400'
},{
    site:'youtube',
    like:'200',
}];


//callbacks
/*
function output(){
    setTimeout(()=>{
        updates.forEach(update=>{
            const outputArea=document.querySelector('#output');
            const list =document.createElement('li');
            list.textContent=`on ${update.site} you have ${update.like} liked`;
            //append updates
            outputArea.append(list);
        })
    },1000)
};
function addUpdate(update,output){
    setTimeout(()=>{
        update.push({site:'tiktok',liked:'700'});
        output();
        console.log(update)
    },1500);
}
addUpdate(updates,output);
*/
//end of callback

// PROMISES

// function output(){
//     const list =document.querySelector('#output')
//     setTimeout(()=>{
//     updates.forEach(update=>{
//         let li =document.createElement('li');
//         li.textContent=`on ${update.site} you have ${update.like} liked!`
//         list.append(li);
//     })
//     },500)
// };
// function addUpdate(update){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             updates.push(update);
//             let err=false;

//             if(!err) {
//                 resolve();
//             }else {
//                 reject('Error failed to execute update before initializing');
//             }
//         },1000);
//     })
// }
// addUpdate({site:'tiktok',like:'800'})
//     .then(output)
//         .catch(err=>console.log(err));     

//End Of Promises

// Promises All
// function output(){
//         const list =document.querySelector('#output')
//         setTimeout(()=>{
//         updates.forEach(update=>{
//             let li =document.createElement('li');
//             li.textContent=`on ${update.site} you have ${update.like} liked!`
//             list.append(li);
//         })
//         },500)
//     };
//     function addUpdate(update){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 updates.push(update);
//                 let err=false;

//                 if(!err) {
//                     resolve();
//                 }else {
//                     reject('Error failed to execute update before initializing');
//                 }
//             },1000);
//         })
//     }
// async function init(){
//     await addUpdate({site:'tiktok',like:'800'});

//     output();
// }
// init();

//async await and fetch

async function init(list){
    const response= await fetch('https://jsonplaceholder.typicode.com/comments');
    const resData= await response.json();

    resData.forEach(data=>{
        const li = document.createElement('li');
        li.textContent=data.name;

        list.append(li);
    })

    
}
init(document.querySelector('#output'));





