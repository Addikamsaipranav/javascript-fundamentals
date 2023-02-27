// when we run this empty file and keep a debugger on first line 
//it will create a global execution context even though the file is empty
// thats why shortest program in js is emptyjavascript file
// when a javascriptfile gets executed, it will create three things 
// 1. global execution context - contains global data , some functions and methos
// 2. window objects
// 3. this -variable 
// all the variables and functions in the program will gets added to global space
 var a=10;
 function b(){
    b=100;
 }
 console.log(a);
 // at global space - a, b will be stored
 // where b() exected , local space of b() gets executed - at local space - b is stored 