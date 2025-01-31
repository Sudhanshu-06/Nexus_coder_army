let user1={
    name:"Rohit",
    age:20
    
}
let user2={
    name:"Mohit",
    money:30,
    amount:20,
    
}

user2.__proto__=user1
console.log(user2.amount);
console.log(user2.age);
let arr=[10,20,30,40]
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__==Object.prototype);
console.log(arr.__proto__.__proto__.__proto__==null);