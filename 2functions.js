// this X is a global varibale and its value is stores in global execution context local space
var x=1;
a();//CONTROLLER GOES HERE -1
b();//CONTROLLER GOES NEXT HERE -2
// after executing , it will print x as 1 , because it will search x in gec .and after that call stack will be empty

console.log(x);//CONTROLLER GOES NEXT HERE -3

function a(){
    // this is a brand new exection context when a() function calls 
    //THis will create a new local space for a()
    // initially x,y be undefind
    // when code gets executed it will alloacte the x,y in their local space respectively
 
    
    var y=1;
    //this log of x , will search the value of x in their local space and if present it will print that value
    console.log(x);
}
function b(){
    // the exection will be same as a()
    var x=100;
    console.log(x);
}