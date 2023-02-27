// undefined
console.log(x)
var x=1;
// this is undefined , because js engine specifies memory to the x as undefined , we are accesing 
// well before initializing , so it prints undefined

//not defined
console.log(a);
// it will log not defined , because varibale a is not present local scope 
//or at any of parental lexical scope 
// so its get logged as not defined