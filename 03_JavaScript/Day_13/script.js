// if-else

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote")

} else {
    console.log("You are not eligible to vote")
}

// if else if

let age1 = 19;
if(age1<18)
{
    console.log("kids are not eligible to vote");
}else if(age1>45)
{
    console.log("senior citizens are not eligible to vote");
}else{
    console.log("You are eligible to vote");
}


// Mutilple condition :switch

switch(new Date().getDay())
{
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
        
        
        
}

// for loop

for(let i=0; i<20; i++){
    console.log("Hello coder army");
}

// sum of first n number:10 number

let sum=0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log("Sum of first 10 number is: ",sum);


// let a=10;
// var b=20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// function scope
function greet(){
    let a=10;
    var b=20;
    const c=30;
    console.log("Hello");
    console.log(a,b,c);
}
greet();

