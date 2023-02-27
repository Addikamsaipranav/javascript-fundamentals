//scope is directly related to lexical environment
// at global level - a will have memory alloaction + lexical memory(null at global level)
// when a() called 
// new execution context created
// here at a() ec-b,c have memory+reference to lexical memory of parent(globals memory)
//b gets assigned as 10
// c() called
//new execution context gets created
// here at c() : b + lexical memory of parent (a() memory)

//when c() gets run, it will search for b in the local memory first ,
// if present , it will present , if not it will search in lexical memory of c(),
// untill it find it will search in its scope , if it reaches to global lexical memory
// and didnt find any thing . js engine returns "NOT DEFINED"
function a(){
    var b=10;
    c();
    function c(){
        var b=100
        console.log(b);
    }
}
var x=1;
a();
