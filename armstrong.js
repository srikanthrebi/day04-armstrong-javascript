let a = 153;
let sum = 0;
let c;
let arun;
arun = a;
while(a>0){
    remainder = a % 10;
    c = remainder ** 3;
    sum = sum + c;
    a = a - remainder;
    a = a / 10;
}
if(arun==a){
    console.log(+arun+": is an armstrong ");
}
else{
    console.log(+arun+": is not armstrong");
}