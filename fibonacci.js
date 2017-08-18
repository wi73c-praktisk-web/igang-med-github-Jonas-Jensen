// function fibo(tal1, tal2) {
//    if(result > 1600) {
//        console.log("No more.");
//    }else if() {
//        console.log(tal1 + tal2);

//    }

// }

// fibo(0,1);

var tal1 = 0;
var tal2 = 1;
var tal3 = 3;

console.log(tal1);
console.log(tal2);

do{
    tal3 = tal1 + tal2;
    console.log(tal3);
    tal1 = tal2 + tal3;
    console.log(tal1);
    tal2 = tal3 + tal1;
    console.log(tal2);
} while (tal1 < 1000);
