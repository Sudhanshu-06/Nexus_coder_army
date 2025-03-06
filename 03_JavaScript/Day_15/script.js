// for of loop

// const arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   console.log(value);
// }

// let str= "Rohit is good boy";
// for(let value of str) {
//     console.log(value);
// }


// forEach loop

// let arr1=[10,20,30,40,50,60,70,80,]
// arr1.forEach(function(num){
//   console.log(num);
// })

// let arr2=[1,2,3,4,5,6,7]
// arr2.forEach((num,index,a)=>{
//   a[index] = num*2;
// })
// console.log(arr2);


// filter

let arr3=[22,41,33,65,77,8,20];
const result = arr3.filter((num)=>{
     return num%2==0;
})

console.log(result);

// map

let arr4=[10,20,30,40,50,60,70,80]
const result1 = arr4.map((num)=>{
   return num*2;
})

console.log(result1);
     