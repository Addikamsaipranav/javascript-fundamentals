function outest(){
    var c=20;
    let a=10000;
    function outer(b){
        function inner(){
            console.log(a,b,c)
        }
        let a=10;
        return inner
    }
    return outer
}
let a=100;
outest()("HELLOR")()


// inner forms clousre with outer and outest
// inner has access to every thing
/* the order of searching is
   1. first search in local inner scope 
   2. first in first lexical parent
   3. next search in lexical's parent
   4. when the value will be selected upon its nearest
*/