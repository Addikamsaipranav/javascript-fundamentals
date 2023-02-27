// call back is nothing but calling function inside the function
// setTimeout(function xy(){
//    console.log("CALLED AFTER 3 SEC AND ITS A CALL BACK FUNCTION")
// },3000)

// function x(y){
//     console.log("X");
//     y(10)
// }
// x(function y(a){
    
//     console.log(a);
// })
console.log("START");
function x(){
    let count=0;
    document.getElementById("clickMe")
.addEventListener("click",function(){
    console.log("CLICKEDDDDD",++count)

})
// actually this call back forms a clousure , such that we have used data hiding by clousres in this js code
}

x()
// console.log("END")


// FUNCTIONS ARE FIRST CLASS CITIZENS
/*
 CALL BACKS ARE VERY POWER FULL THAT IT EILL GIVE US ACCESS TO WHOLE ASYNCHRONOUS WORLD IN JAVASCRIPT
 ACTUALLY JAVASCRIPT IS SYNCHRONOUS SINGLE THREADED THAT JS CAN DO ONLY ONE THING AT A TIME IN A SPECIFIC ORDER
 // BY USING CALL BACKS WE CAN DO MULTIPLE THINGS AT A TIME 



*/

