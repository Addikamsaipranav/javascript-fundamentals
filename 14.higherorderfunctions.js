// function passing as a paramter and returing a function from function is higher order function

const radius=[1,2,3,4];
const area=function(radius){
    return Math.PI*radius*radius
}
const circumferrnce=function(radius){
    return 2*Math.PI*radius
}
const calc=function(radius,logic){
    const o=[]
    for(let i=0;i<radius.length;i++){
        o.push(logic(radius[i]));
    }
    return o
}

console.log(calc(radius,area));
console.log(calc(radius,circumferrnce));