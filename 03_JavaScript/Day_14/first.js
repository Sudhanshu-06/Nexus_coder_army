// let obj={}

// obj.name = "rohit";
// obj.age= 20;
// // key value writable enumrable configurable
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// // writable = true
// obj.name ="Mohit"; 

// configurable = true

let obj = {};
Object.defineProperty(obj, "name",{
    value: "Rohit",
    writable: true,
    enumerable: true,
    configurable: true
    
})
console.log(obj);

const customer ={
    name:"Aman",
    age:30,
    account_no:123,
    balance:2000
}

let customer2 = Object.create(customer)
customer2.city="Bihar"
customer2.country="India"

Object.defineProperty(customer, "name",{
    enumerable: false,
})

for(let key in customer)
    console.log(key)

    for(let key in customer2)
    console.log(key)

