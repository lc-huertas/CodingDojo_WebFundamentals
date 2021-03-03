var testArr = [6,3,5,1,2,4]
// Print each array value and the sum so far
let sum =0;
let msg = "";
for (let index = 0; index < testArr.length; index++) {
    sum=sum+testArr[index];
    msg='Array Value: '+testArr[index]+' Sum: '+sum;
    console.log(msg)
}
// Multiply each array value by its position
for (let index = 0; index < testArr.length; index++) {
    testArr[index]=testArr[index]*index;
}
console.log(testArr)