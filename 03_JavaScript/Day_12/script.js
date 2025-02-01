// Function

function greet(name) {
    console.log("Hello, " + name);
}

greet("Sudhanshu");

function sum(num1,num2){
    console.log(num1+num2);
}
sum(2,4)

function multiply(num1,num2){
    return num1*num2
}
let result = multiply(7,8)
console.log(result)

const fun1 = function(){
    console.log("Hello Aman");
}
fun1()

// Arrow Functions

const fun = ()=>{
    console.log("Hello coder");
}
fun()

const sum1 = (num1,num2)=>{
    return num1+num2
}
console.log(sum1(3,4))

const sum2 = (num1,num2)=> num1+num2;


const cube = function(number){
    return number*number*number;
}
console.log(cube(8));

const cube1 = number=> number*number*number;


const add = function(...number){
    
}
add(2,3,4)
add(5,7,8,9)

let obj={
    name:"Aman",
    age:30,
    amount:420
}
function fun2(obj){
    console.log(obj.name,obj.amount)
}
fun2(obj)

function fun3(name,amount){
    console.log(name,amount)
}
fun3(obj)