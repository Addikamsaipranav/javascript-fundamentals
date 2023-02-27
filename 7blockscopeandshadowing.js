//let,const are in block scope
/* let and const variables are stored in separate memory space,
 so it is called block-scoped but var variables can be accessed
  outside the block as it is stored in the Global object memory space,
 hence it is called Global scoped.

 Shadowing: Now, when a variable is declared in a certain 
 scope having the same name defined on its outer scope and
  when we call the variable from the inner scope, the value assigned
   to the variable in the inner scope is the value that will be stored
    in the variable in the memory space. This is known as Shadowing or 
    Variable Shadowing. In JavaScript, the introduction of let and const in
     ECMAScript 6 along with block scoping allows variable shadowing.
 */
{
    var x=10;
    console.log(x)
    // this is known as block of statements
}

//block scope : block scope is nothing but wheater all variables,fuctions we can access in side the block are not 
let a=10;
{
    const a=100;
    let b=20;
    const c=30;
    // in brwoser , a will be in global scope 
    // b,c be in block scope
    console.log(a);

}
// we cant access b at global level because it in block scope , we can access them inside its scope itself
console.log(a);
//we can access a , because its var and it will be in global scope , such that we can access and even modify it


// let c=10;
// {
//     var c=10;
//     // this is calle illegal shadowing 
// }


