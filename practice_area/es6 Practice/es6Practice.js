//////////////////////////////////////////////////
//❤❤❤💋  Class inherit 💋❤❤❤
//////////////////////////////////////////////////
class Products{
    constructor(name,price){
        this.name = name;
        this.price = price; 
    };

    getPrice(){
        return this.price;
    };
    getName(){
        return this.name;
    };
};
class Product extends Products{
    constructor(name,price,size,type){
        super(name,price)
        this.size = size;
        this.type = type;
    }
    getSize(){
        return this.size;
    }
    getType(){
        return this.type;
    }
    getAll(){
        return {name:this.name,price:this.price,size:this.size,type:this.type};
            
    }
};
let nike = new Product('nike','$150','34','shoes');
let adidas = new Product('adidas','$200','30','shoes');
let supreme = new Product('supreme','$60','xs-xl','clothes');
let locoste = new Product('lacoste','$180','24-40','slipper');
let xebro = new Product('xebro','$70','sm-lg','hat');
let BMW = new Product('BMW','$25,000','md','car');
let person = new Product('Kyla Mae Agustin','8','children','person');

const brands = [
    nike.getAll(),
    adidas.getAll(),
    supreme.getAll(),
    locoste.getAll(),
    xebro.getAll(),
    BMW.getAll(),
    person.getAll()
];
const output = () => {
    brands.forEach(brand =>{
        const list = document.querySelector('#list');

        list.innerHTML += `
            <tr>
                <td>${brand.name}</td>
                <td>${brand.price}</td>
                <td>${brand.size}</td>
                <td>${brand.type}</td>
            </tr>
        `;
    })
};
output();

//////////////////////////////////////////////////
//❤❤❤💋 template 💋❤❤❤// 
/////////////////////////////////////////////////
const makeLowerCase = word => word.toLowerCase();
const makeUpperCase = word => word.toUpperCase();

const statement = `${makeLowerCase(`HELLO`)} my name is ${makeUpperCase(`Melvin C. Agustin`)}.`;


//////////////////////////////////////////////////
//❤❤❤💋 String Method 💋❤❤❤// 
/////////////////////////////////////////////////

//return True Or False
const password = `Rico@1230`;

password.startsWith('R');
password.endsWith('0');
password.includes('ico');
//////////////////////////////////////////////////
//❤❤❤💋 Number Method 💋❤❤❤// 
/////////////////////////////////////////////////

//Return True or False
Number.isFinite(NaN)
Number.isInteger(0);
Number.isNaN(9);

//////////////////////////////////////////////////
//❤❤❤💋 Default Parameter and Spread Operator 💋❤❤❤// 
/////////////////////////////////////////////////

const args1 = [1,2,3,4];
const args2 = [5,6,7,8];
const args3 = [9,10,11,12];

const test = () => `${args1},${args2},${args3}`;

test(...args1,...args2,...args3);


//////////////////////////////////////////////////
//❤❤❤💋 Set, Map, WeakSet and WeakMap 💋❤❤❤// 
/////////////////////////////////////////////////

//Set
let scores = [
    {name:'james',score:35,subject:'Math',item:50},
    {name:'Ernest',score:23,subject:'Math',item:50},
    {name:'Melvin',score:60,subject:'English',item:60}
];
let teachers = ['Maribel','Marlyn','cellie'];
let scoreSet = new Set(scores);

scoreSet.add(teachers);
scoreSet.add({name:'Marvin',score:48,subject:'Filipino',item:65});


//Map
const key = ['firstName','LastName','MiddleName'];
const value = ['Melvin','Agustin','Concepcion'];
const myMap = new Map(
    [
        [key[0],value[0]],
        [key[1],value[1]],
        [key[2],key[2]],
    ]
);

//weakSet


//////////////////////////////////////////////////
//❤❤❤💋 Arrow Function 💋❤❤❤// 
/////////////////////////////////////////////////
class Prefix{
    constructor(greet){
        this.greet = greet;
    }
};
class Pre extends Prefix {
    constructor(name,greet){
        super(greet);
        this.name = name;

        greet = 'hello';
    }
};
let person2 = new Pre('Melvin');
let person3 = new Pre('James');
let person4 = new Pre('Jane');


//////////////////////////////////////////////////
//❤❤❤💋 Generators 💋❤❤❤// 
/////////////////////////////////////////////////

function *startIntro(){
    const introArea = document.querySelector('#intro');
    
    introArea.textContent = "_";
    yield
    introArea.textContent = "M_";
    yield
    introArea.textContent = "Me_";
    yield
    introArea.textContent = "Mel_";
    yield
    introArea.textContent = "Melv_";
    yield
    introArea.textContent = "Melvi_";
    yield
    introArea.textContent = "Melvin_";
    yield
    introArea.textContent = "Melvin.";
};

const start = startIntro();
setInterval(() => start.next(),500);


//End