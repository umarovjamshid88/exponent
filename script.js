var num = +prompt('enter number');
var exponent = +prompt('enter exponent');

if(isNaN(num)){
    alert('number can not be a character');
}else if (num == 0){
    alert('it can not be zero');
}else if(isNaN(exponent) || exponent == 0){
    exponent = 2;
    alert(num ** exponent);
}else{
    alert(num ** exponent);
}


// var a = +prompt('enter 1number');
// var b = +prompt('enter 2number');
// if(isNaN(b) || b == 0){
//        b = 2;
//        alert(a*b);
//     }
//     else{
//         alert(a*b);
//     }