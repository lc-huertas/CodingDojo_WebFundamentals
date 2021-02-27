// 1: return an array with all numbers from 1 to 225.
function GetNum() {
    let NumArray =[];
    for (let index = 1; index <= 255; index++) {
    NumArray.push(index);
    }
    return NumArray;
}
// 2: return the sum of all even numbers from 1 to 1000.
function GetEven(){
    let sum=0;
    for (let index = 1; index <= 1000; index++) {
        if (index%2==0) {
            sum=sum+index;
        }
    }
    return sum;
}
// 3: return the sum of all odd numbers from 1 to 5000.
function GetOdd(){
    let sum=0;
    for (let index = 1; index <= 5000; index++) {
        if (index%2!=0) {
            sum=sum+index;
        }
    }
    return sum;
}
// 4: return the sum of all the values in an array.
function IterateArray(Data){
    let sum=0;
    for (let index = 0; index < Data.length; index++) {
        sum=sum+Data[index];
    }
    return sum;
}
// 5: return the max value in an array.
function GetMax(Data){
    let max=-1000000;
    for (let index = 0; index < Data.length; index++) {
        if (Data[index]>max) {
            max=Data[index];
        }
    }
    return max;
}
// 6: Find the average value of a data set.
function GetAverage(Data){
    let sum=0;
    for (let index = 0; index < Data.length; index++) {
        sum=sum+Data[index];
    }
    let average = sum/Data.length
    return average;
}
// 7: return an array of all the odd numbers from 1 to 50.
function GetOdd(){
    let Odds=[];
    for (let index = 1; index <= 50; index++) {
        if (index%2!=0) {
            Odds.push(index);
        }
    }
    return Odds;
}
// 8: return the number of values in a data set that are greater than a given value, Y.
function GreaterThan(y,Data){
    let count=0;
    for (let index = 0; index < Data.length; index++) {
        if (Data[index]>y) {
            count++;
        }
    }
    return max;
}
// 9 : individually square each element in an array and return the modified array.
function Square(Data){
    for (let index = 0; index < Data.length; index++) {
        Data[index]=Data[index]*Data[index];    
    }
    return Data;
}
// 10 : replace all negative values in an array with zero
function NoNegatives(Data){
    for (let index = 0; index < Data.length; index++) {
        if (Data[index]<0 ) {
            Data[index]=0;
        }
    }
    return Data;
}
// 11: Give an array of values, return an array that has the Max/Min/Avg of that data set.
function Statistical_Analysis(Data){
    let max=-100000;
    let min=100000;
    let sum=0;
    let results = [];
    for (let index = 0; index < Data.length; index++) {
        if (Data[index]< min ) {
            min=Data[index];
        }
        if(Data[index]> max){
            max=Data[index];
        }
        sum=sum+Data[index];
    }
    results.push(max);
    results.push(min);
    results.push(sum/Data.length);
    return results;
}
// 12: create a function that will swap the first and last values of an array.
function Swap(Data){
    if(Data.length>=2){
        let temp = Data[0];
        Data[0]=Data[Data.length-1];
        Data[Data.length-1]=temp;
        return Data;
    }
    else{
        let msg = "Array is too short.";
        return msg;
    }
}
// 13: create a function that replaces any negative values with "Dojo"
function NoNegatives(y,Data){
    for (let index = 0; index < Data.length; index++) {
        if (Data[index]<0 ) {
            Data[index]="Dojo";
        }
    }
    return Data;
}
