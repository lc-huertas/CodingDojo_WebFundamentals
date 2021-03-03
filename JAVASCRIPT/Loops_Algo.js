//Print out all odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for (let index = 1; index <20; index++) {
    if(index%2!=0){
        console.log(index);
    }
}
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
let sum=0;
for (let index = 1; index <= 5; index++) {
    sum+=index;
    msg = "Num:"+index+" "+"Sum:"+sum;
    console.log(msg);
}