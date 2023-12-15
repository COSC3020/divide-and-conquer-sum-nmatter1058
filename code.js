/*Divide and Conquer Sum 

Sources:
    https://www.geeksforgeeks.org/iterative-merge-sort/
    Lab 3 - Nicholas Matter - 9/23/22
*/
function divideAndConquerSum(a) {
    if(a.length==0) return a[0]=0;
    var tmp = [];
    var arr = divide(a, 0, a.length-1, tmp);
    return arr;
}

test();
function test(){
    var c  = [];        //0
    var b = [3];        //3
    var a = [1,5,-1,4]; //9
    var d = new Array(10);
    for (var i = 0; i < d.length; i++) {
        d[i] = Math.floor(Math.random() * 10);
    } 
    console.log("The array is: " + a);
    divideAndConquerSum(a);
    console.log("The sum of the array is: " + a[0]);
    console.log("\nThe array is: " + b);
    divideAndConquerSum(b);
    console.log("The sum of the array is: " + b[0]);
    console.log("\nThe array is: " + c);
    divideAndConquerSum(c);
    console.log("The sum of the array is: " + c[0]);
    console.log("\nThe array is: " + d);
    divideAndConquerSum(d);
    console.log("The sum of the array is: " + d[0]);
}

/*
function divide(a, lo, hi, tmp){
    if(lo+1>=hi) return;
    var mid1 = lo+ Math.floor((lo+hi)/3);
    var mid2 = lo +Math.floor((lo+hi)/3)*2;
    divide(a, lo, mid1, tmp);
    divide(a, mid1+1, mid2, tmp);
    divide(a, mid2+1, hi, tmp);
    conquer(a, lo,mid1,mid2,hi,tmp);
}
*/
function divide(x, lo, hi, tmp) {  
    for (size = 1; size <= x.length-1; size*=3) {
        for(lo=0; lo < x.length-1; lo +=3*size){
            var mid = lo + size - 1;
            var mid1 = lo + 2*size - 1;
            hi = Math.min(lo+3*size-1, x.length-1);
            conquer(x, lo, mid, mid1, hi, tmp);
        }
    }
}

function conquer(a, lo, mid1,mid2, hi, tmp){
    var p1 = lo, p2 = mid1 +1 ; p3 = mid2+1;
    for(var k = lo; k <= hi; k++) {
        var sum = a[p1] + a[p2] +a[p3];
        tmp[k] = sum;
        if(p3 > hi){
            var sum = a[p1] + a[p2];
            tmp[k] = sum;
        }    
        for (var k = lo; k <= hi; k++){
            a[k] = tmp[k];   
        } 
    } 
}
