// // function statement:
// function a(){
//     console.log("SIMPLE FUNCTION STATEMENT");
// }
// //function expression
// var b=function(){
//     console.log("SIMPLE FUNCTION EXPRESSION");
// }
// // this is known as simple function expression , where we write functions in the variables

// // A function without name is known as ananymous function
// function a(){
//     var a=10
//     return function(){
//         // this is ananymous function
//         console.log(a);
//     }


// }
// a()()

// // named functions
// // its like function expression but here we have name for function
// var c= function xyz(){
//     console.log("HLO");
    
    
// }

// c()
// // if we tries to return xyz()==> it will give u the error
// //because xyz is in the scope of b , we can access inside them only

// //difference between parameters and arguments
// function y(a){
//     // a is parameter
//     console.log(a);
// }

// y(10)
// here 10 is argument

//parameters are some thing which we use in the funcction while defining them
//arguments are like , we will pass them to functions while calling or we can say as function invocation time


////first class functions:
//FIRST CLASS FUNCTIONS are nothing but this is an ability to use functions as values that we can 
// pass function as an argument to another function this is known as first class functions

// function z(i){
//       console.log("A of argument",)
// }
// z(function xyz(){
//     var a=10
// })
var b=function(u){
    return function(){
         console.log("return")
    }
    xz();
}
var x=b(xz)
function xz(){
    console.log("XZ")
}
x();


////FUNCTIONS ARE FIRST CLASS CITIZENS