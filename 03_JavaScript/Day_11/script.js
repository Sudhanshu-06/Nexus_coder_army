// let obj1={
//     a:1,
//     b:2
// }
// let obj2=obj1;
// shallow copy

// console.log(obj2);
// console.log(obj2,obj1);

// deep copy

// let obj3= structuredClone(obj1);
// obj3.a=20;
// console.log(obj3,obj1);

// // Nested objects
// const user={
//     name:"Aman",
//     balance:420,
//     address:{
//         pincode:843329,
//         city:"Pune"
//     }
// }
// console.log(user.address.pincode);

// const user2 = Object.assign({},user)
// console.log(user2);
// user2.address.pincode=42456;
// console.log(user.address.pincode);
// user2.name="Rohit";
// console.log(user.name);


// Destructuring of an object
let obj = {
    name: "Aman",
    money:430,
    age:30,
    balance:420,
    arr:[20,40,60,80],
    aadhar:"hgdfdtfytfy",
    address:{
        pincode:843329,
        city:"Pune",
        state:"UK"
    }
    
}
// const {name,balance,age}=obj;
// const {name:full_name, balance:amount,age:umar}= obj;
const {name,age,...obj1}= obj;
console.log(obj1);

const {address:{pincode,city}}=obj
console.log(pincode,city);
// Destructing of array

// const arr=[3,2,1,5,8]
// const[first,second]=arr;
// console.log(first,second);


let user= {
    name:"Aman",
    age:25,
    greet:function(){
        console.log("Hello code army");
    }
}
user.greet()


// prototype chain