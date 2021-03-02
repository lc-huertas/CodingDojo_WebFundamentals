// 1 Predict: 35
function a(){
    return 35;
}
console.log(a())
// 2 Predict: 8
function a(){
    return 4;
}
console.log(a()+a());
// 3 Predict: 6
function a(b){
    return b;
}
console.log(a(2)+a(4));
// 4 Predict: 3,9
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));    
// 5 Predict: 40
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
// 6 Predict: 4
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// 7 Predict: 30,30
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// 8 Predict: 3,4
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// 9 Predict:2,5,8,10
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// 10 Predict:2,5,8,10
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// 11 Predict: 0,1,2,3,4,5,6,7,8,9,
//             0,1,2,3,4,5,6,7,8,9
function a(b,c){
    for(var i=b; i<c; i++) {
    console.log(i);
    }
return b*c;
}
a(0,10);
console.log(a(0,10));
// 12 Predict: will report 0-9, followed by 0 incrementing by 1 for a total of 10 times.
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
    console.log(i);
    }
}
// 13 Predict: will report 0 incrementing by for a total of 10 times, followed by 0-9 for each time.
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// 14 Predict: 15, 10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// 15 Predict: 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);