function profil(fname, lname, bday) {
    console.log(fname, lname, bday);
}

profil("Black", "Santa", "24. December");

//----------------------------------
var result = [];

function math(tal1, tal2) {
    result.push(tal1 + tal2);
    result.push(tal1 - tal2);
    result.push(tal1 * tal2);
    result.push(tal1 / tal2);
}
math(55, 25);
console.log(result);
math(10, 10);
console.log(result);
math(60, 30);
console.log(result);

//----------------------------------

var result1 = [];

function plus(tal3, tal4) {
    var res1 = tal3 + tal4;
    result1.push(res1);
}
function minus(tal3, tal4) {
    var res2 = tal3 - tal4;
    result1.push(res2);
}
function gange(tal3, tal4) {
    var res3 = tal3 * tal4;
    result1.push(res3);
}
function divide(tal3, tal4) {
    var res4 = tal3 / tal4;
    result1.push(res4);
}
function sum(res1 = 0, res2 = 0, res3 = 0, res4 = 0) {
    var sum = res1 + res2 + res3 + res4;
    result1.push(sum);
}

plus(50, 20);
minus(40, 20);
gange(30, 20);
divide(20, 20);
sum(result1[0], result1[1], result1[2], result1[3]);
console.log(result1);


//-----------------------------------