// callback function


function name(fun){
    console.log("hello world");
    fun();
}

function greet(){
    console.log("Hello I am call back function");
    
}

name(greet);