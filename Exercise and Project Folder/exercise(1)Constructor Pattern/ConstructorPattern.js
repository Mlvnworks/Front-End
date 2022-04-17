function Person(Name,Age,Bt){
    this.Name=Name;
    this.Age=Age;
    this.Bt=Bt;

}
let myName;
let myAge;
let myBt;
let  users=document.querySelector('.p')

function ubmit(){
   


     myName=document.querySelector('#fullName');
     myAge=document.querySelector('#age');
     myBt=document.querySelector('#bType');
    let user=new Person(myName.value,myAge.value,myBt.value);
    // conditionals
   if(myName.value === "" || myAge.value ==="" || myBt.value ===""){
       alert('fill the empty fields')
       
   }else{
    const fullInfo=`Name: ${user.Name}| Age: ${user.Age} | Blood Type: ${user.Bt}  <br/> `
    
    // users list
    users.innerHTML += fullInfo;

    // clear
    myName.value="";
    myAge.value="";
    myBt.value="";

   }
    

}
// clear list
const click=document.querySelector('#btn')
click.addEventListener('click' ,clr ) ;

function clr(){
    users.innerHTML="";
}
