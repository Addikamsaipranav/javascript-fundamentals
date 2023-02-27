//let and const declarations are hoisted 
// they are in temporal dead zone

console.log(b);
let b=10;
/* b gets allocated some memory but not in global space in scope we can see
script , global memeory
b present in script memory
let,const will be in script memory space,
var will be in global space
so we cant access let,const variables even before initializing them.
*/

//TEMPORAL DEAD ZONE
/*
THE time between any let,const varibles hoisted and untill its initialized by
some value , the time between them is known as temporal dead zone
WHEN EVER YOU TRY TO ACCESS VARIBALE IN TEMPORAL DEAD ZONE , IT SHOWS REFERNCE ERROR 
Uncaught ReferenceError: Cannot access 'b' before initialization
*/


//let
//let a=10;
//let a=100;

// this is an invalid syntax,we cant re declare a same variablein the same scope again


// const is like let only 
// in let we can declare and initialize in different places
// but in const , we need to declare and initialize at the same place itself 

/* there are 3 types of erros
  Type error - b is of const type, it needs to be declared and initilized at the same time 
               if not it will show type error 
  Syntax error - const b; 
                 its a syntax error , because it needs to declare and initialized

  Refernce error - in temporal dead zone , it shows reference error 
*/