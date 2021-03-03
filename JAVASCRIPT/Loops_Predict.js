// The code below will report the 0 to 15 on the console.
for(var num = 0; num < 15; num++){
    console.log(num);
}
// the code below will report all the odd numbers: 1,3,6,etc.-
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
// the code below will vary its incrementation of the j-variable
// and report a value of 16 to the console.
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}