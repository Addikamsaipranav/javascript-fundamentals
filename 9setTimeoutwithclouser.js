// function x(){
//     var i=1;
//     setTimeout(function (){
//        console.log(i)
//     },3000)
//     console.log("HELLO 1");
//     console.log("HELLO 2");
//     console.log("HELLO 3");
//     console.log("HELLO 4");
// }
// x();

/* actually when we see the code we can think , it will initialize i=1
  and then it waits for settime out function complete its code and then it logs next lines
  BUT JS WONT WAIT FOR SETTIME OUT TO RUN ,RATHER IT WILL CREATE NEW SPACE  FOR SET TIME , WHEN TIMER
  EXPIRES , IT WILL EXECUTE IT
*/

// function y(){
//     for(var a=1;a<=5;a++){
//         setTimeout(function(){
//             console.log(a);
//         },a*1000)
//     }

// }
// y();

// here in this code it will print 6,6,6,6,6 rather to print 1,2,3,4,5
//because a is declared as var
// var is global scoped
// when settimeout is kept in seperate memoery , it wont sit idle 
// it will execute the results and print result after time expires
// as the a variable is pointed to global scope 
// the a value gets increase untill loop terminates
// when timer expires , the value of a will be 6
// therefore it will print value as 6

//to achieve the correct result , we can use let instead of var 
// because let is block scoped, whenever a loop gets runned , it creates a new block scope and it will remember the 
// refernce of it because as it forms closure with it.

// or else we can achieve through closures with var itself

// function z(){
//    for(var i=0;i<=5;i++){
//     function a(i){
//         setTimeout(function (){
//             console.log(i)
//         },i*1000)
//     }
//     a(i)
//    }
  
   
// }

// z()
function x(){
   for(var i=0;i<=7;i++){
    function a(i){
       setTimeout(function(){
        console.log(i)
       },i*1000)
    }
    a(i)
   }
}
x()