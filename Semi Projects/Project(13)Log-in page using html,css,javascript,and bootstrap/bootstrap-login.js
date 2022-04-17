const userName=document.querySelector('#user-name');
const validFeedback=document.querySelector('#feedback');
const userPassword=document.querySelector('#user-password');
const remember=document.querySelector('#remember');
const btnRemember=document.querySelector('#btn-remember');
const vision=document.querySelector('#v');
const mision=document.querySelector('#m')
const abUs=document.querySelector('#about-us');
const nav=document.querySelector('#n')
const a=document.querySelector('.a')
const ul=document.querySelector('.nav');


const vi=document.querySelector('#vi');
const mi=document.querySelector('#mi');
const foot=document.querySelector('footer');





// EVENTS
userName.addEventListener('keyup',()=>{
    if(userName.value.includes('@') && userName.value.includes('.com') ){
        userName.className='form-control form-control-lg is-valid';
        validFeedback.textContent='';

    }else{
        userName.className='form-control form-control-lg is-invalid';
        validFeedback.textContent='enter valid email';
    }
    
})
remember.addEventListener('click',()=>{
    if(remember.checked == false){
        console.log('un remembered')
    }else{
        console.log(userName.value);
        console.log(userPassword.value);
        
    }
})
vision.addEventListener('click',()=>{
    window.scrollTo(0,vi.offsetTop-112);
})
mision.addEventListener('click',()=>{
    window.scrollTo(0,mi.offsetTop-56);
})
abUs.addEventListener('click',()=>{
    window.scrollTo(0,foot.offsetTop);
})
const li=document.createElement('li');
li.innerHTML=`<a class="btn nav-link link-light" id="l">Log-in</a>`
li.classList.add('nav-item')

function transform(){
    let state=false;
    if(window.scrollY >= a.offsetTop){
        state=true;
        nav.classList.add('sticky');

    }else{
        state=false;
        nav.classList.remove('sticky');
    }
    if(state ==true){
            ul.prepend(li);
            const l=document.querySelector('#l');
            l.addEventListener('click',()=>{
                window.scrollTo(0,0);
            })
    }else{
            
            li.remove();
    }
    
}