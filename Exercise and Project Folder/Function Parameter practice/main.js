//adding the value of variable
//passing num1 num2 parameter
function solver(num1,num2){
    //(6)geting the data of parameter
    //(7)passing it using below:
    this.num1=num1;
    this.num2=num2;

    //(8)this where the opration doned 
    let result =parseInt(num1) + parseInt(num2);
    //(9)displaying the output to UI or user Interface
    const output = document.querySelector('#output');
    output.textContent=`the Sum of ${this.num1} plus ${this.num2} is ${result}`;
    
}
//(1)Selecting Form
const myForm=document.querySelector('#my-form');
//(2)adding submit event in form
myForm.addEventListener('submit',form=>{
    //(3)preventing form from submiting
    form.preventDefault();

    //(4)adding important variables
    const num1=document.querySelector('#num1').value;
    const num2=document.querySelector('#num2').value;

    //(5)pasing the value of variable to the function
    const problem= solver(num1,num2);

    //(10) clear fieds
    num1.value="";
    num2.value="";
})