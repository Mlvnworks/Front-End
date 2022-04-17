let utangs=[{
    name:'rocky',
    amount:13,
    product:'load'
},{
    name:'jSam',
    amount:65,
    product:'load'
},{
    name:'jest',
    amount:55,
    product:'load'
},{
    name:'Kibol',
    amount:140,
    product:'4X4'
},{
    name:'Apong Eding',
    amount:23,
    product:'Bagoong'
},{
    name:'alvin',
    amount:80,
    product:'winston'
}];

const loadUtang = outputLoad(utangs.filter(tao => tao.product === 'load')
    .map(tao => `${tao.name}--${tao.amount}--${tao.product}`));

const othersUtang = outputOthers(utangs.filter(tao => tao.product !== 'load')
    .map(tao => `${tao.name}--${tao.amount}--${tao.product}`))

function outputOthers(pbo){
    const utangList=document.querySelector('#others_utang_list');
    pbo.forEach(p=>{
        let li=document.createElement('li');
        li.textContent=p;

        utangList.append(li);
    })
}
function outputLoad(pbl){
    const utangList=document.querySelector('#load_utang_list');
    pbl.forEach(p=>{
        let li=document.createElement('li');
        li.textContent=p;

        utangList.append(li);
    })
}

