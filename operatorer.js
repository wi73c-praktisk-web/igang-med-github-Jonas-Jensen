var tal1 = 4;
var tal2 = 7;

console.log(tal1 + tal2);
console.log(tal1 - tal2);
console.log(tal1 * tal2);
console.log(tal1 / tal2);
console.log(tal1 % tal2);
tal1++;
console.log(tal1);
tal2--;
console.log(tal2);

// ------------------------

var tal3 = 6;
var tal4 = 9;

console.log(tal3 += tal4);
var tal3 = 6;
var tal4 = 9;
console.log(tal3 *= tal4);
var tal3 = 6;
var tal4 = 9;
console.log(tal3 -= tal4);
var tal3 = 6;
var tal4 = 9;
console.log(tal4 %= tal3);
var tal3 = 6;
var tal4 = 9;
console.log(tal3 /= tal4);


// -----------------------

var alder = 66;
var adgang = 65;
var max = 70;

if(alder > adgang && alder < max){
    console.log("Du har adgang!");
}else{
    console.log("Du har ikke adgang!");
}

//------------------------

var alder1 = 10;
var adgang1 = 20;

if(alder1 > adgang1 || alder1 == adgang1){
    console.log("Du har adgang!");
}else{
    console.log("Du har ikke adgang!");
}

//------------------------