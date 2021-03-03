// Predict 1: This will report each element of the array to the console.
console.log("Predict 1:")
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
// Predict 2: This will report each number to the console, with the exception
// of odd numbers, it will simply state the element is an odd-number.
console.log("Predict 2:")
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
// Predict 3: This will turn positive numbers, negative and negative
// numbers, positive. It will allso replace 0's with the text "zero"
// before reporting the modified array to the console, followed by
// a new array of all the originally negative values found. 
console.log("Predict 3:")
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);