// function outer(x){
//     function b(){
//         console.log("BBB")
//     }
//     return function inner(y){
//         function a(z){
//             // we are accessing x inside the function , which we set outside, this is becuase of closures
//         console.log(x,"X VALue")
//         console.log(y,"y VALue")
//         console.log(z,"z VALue")
//         }
//         a()
//     }
// }
// const newly=outer("OUTER")("Y")
// newly("inner z")

function a(){

    function b(age){
        
        console.log(name,"'s age is",age)
    }
    return b;
}
name="pr"
var x=a();
x(10)

// here global , a() ,b()

//after returning b , b() ec gets removed and a() ec gets removed and when x(10) executed
// x holds return value of a("Pranav") ie function b
// so we can pass arguments of b() to x() 
//for x(10)===> age =10
// actually the call stack is empty but x holds reference of b()
// in b() it can access all elements of its lexical parent ie name="pranav"
// thus we can print pranav's age is 10



// const myname="pranav"
// function name(){
//     console.log(myname)
// }
// name();

// function a(){
//     var x=7;
//     function b(){
//         var x=10;
//         console.log(x)
//     }
//     b();
// }

// a();

// function a(x){
//     function b(y){
      
//         function c(z){
//             console.log(x)
//             console.log(y)
//         }
//         return c;
//     }
//     return b
// }
// a(2)(3)(5)
// this will return 2(a)
// because c() forms closure with both b and a
// closure b holds y value and closure a holds x value
// thus c() holds function local area and surrouding lexical environment
// function x(){
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// var a=10
// var z=x()
// z()
