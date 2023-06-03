
 //Floor      (eng kichik butun qism)
// function Floor(a){
//     x = parseInt(a);
//     return x
// }

// num = Floor(23.54);
// console.log("Floor = ", num);



// //                ceil(eng katta butun qism)
// function d(a){
//     a = (parseInt(a * 10) + 5) / 10;
//     b = (parseInt(a * 10) + 5) / 10;
//     if (a > b){
//         x = parseInt(a);
//     }
//     else {
//         x = parseInt(b);
//     }
//     return x
// }

// number = d(87.5);
// console.log("d = ", number);



//            Round   (eng yaqin butun qism)
// function round(a){
//     a = (parseInt(a * 10)) / 10;
//     b = (parseInt(a * 10) + 5) / 10;
//     if (a > b){
//         x = parseInt(a);
//     }
//     else {
//         x = parseInt(b);
//     }
//     return x
// }

// number = round(67.4);
// console.log("round = ", number);




// //               Square
// function Square(x, n) {
//     if (n == 1){
//         return x;
//     }
//     else {
//     for (let i = 1; i < x / n; i ++) {
//         Sum = 1;
//         for (let j = 0; j < n; j ++){
//             Sum *= i;
//         }
//         if (Sum == x){
//             return i;
//             console.log(i);
//         }
//     }
// }
// }

// sqrt = Square(8,3);
// console.log("Sqrt = ", sqrt);




//     // trunc     (faqat butun sonni oladi)
// function trunc (a) {
//     return parseInt(a)
   
// }
// console.log(trunc (12.3))



function abs (num) {
    if (num<0) {
        return num  * -1
    }else {
        return num
    }
}
console.log(abs(-98))









