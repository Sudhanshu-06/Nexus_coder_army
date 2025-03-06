// callback function


function names(fun){
    console.log("hello world");
    fun();
}

function greet(){
    console.log("Hello I am call back function");
    
}

names(greet);


function fetchData(){
    console.log("I am fetching data");
}
setInterval(fetchData,5000)