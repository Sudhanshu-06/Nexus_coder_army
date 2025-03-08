// reduce

let arr = [10, 20, 30, 40, 50];

let result = arr.reduce((accumulator, currentValue) =>{
    accumulator= accumulator+currentValue
    return accumulator
},0)
console.log(result);


// set 

    let set1 = new Set([10, 20, 30, 40, 50, 20]);
    console.log(set1);
    set1.add(7);
    console.log(set1);
    console.log(set1.size);


    // map
    const map = new Map();
    map.set(3,90)
    map.set("rohit",45)
    console.log(map);