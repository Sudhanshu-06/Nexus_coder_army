// how to create object

const obj={
    0:20,
    1:50,
    name:"Aman",
    age:25,
    city:"Pune",
    "gender":"Male"
    
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.city)
console.log(obj.gender)

console.log(obj["age"]);
console.log(obj["gender"]);
console.log(obj['0']);
console.log(obj[1]);

// second method
const person = new Object()

// properrty add
person.name="John"
person.age="20"
person.gender="male"
console.log(person);
// delete
delete person.age;
console.log(person);
// Modify

person.name="Jane"
console.log(person);


// Third method

class People{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    }
}
let per1 = new People("Rohit",20,"Male");
console.log(per1);

// common methods for object


let obj1={
    name:"Aman",
    age:30,
    city:"Pune",
    gender:"Male",
}

const arr= Object.keys(obj1)
const arr1 = Object.values(obj1)
console.log(arr);

// keys, values
const arr3= Object.entries(obj1)
console.log(arr3);

// assign use case

let obj4={a:1,b:2}

let obj5={c:3,d:4}


const obj6= Object.assign({},obj4,obj5);
console.log(obj6);
let obj7 = {...obj4,...obj5}

console.log(obj7);
