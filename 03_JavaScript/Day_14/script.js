let obj={
    name:"Aman",
    age:25,
    gender:"male",
    city:"Pune"
}
// for in loop, I can iterate over keys in an object

// for(let key in obj){
//     console.log(key,obj[key]);
    
// }
// console.log(Object.keys(obj));

let obj2 = Object.create(obj);
obj2.money=420;
obj2.id="amn";
console.log(obj2);
console.log(obj2.name);
console.log(Object.keys(obj2));

for(let key in obj2){
    console.log(key);
}