var bool = false;

if(bool == true){
    console.log('Hej Verden');
}

// ----------------------------------

var number = Math.floor(Math.random() * 11);

if(number > 5){
    console.log('Number er større end 5');
}else if(number < 5){
    console.log('Number er lavere end 5');
}else{
    console.log('Number er 5');
}
console.log(number);

//----------------------------------

var number1 = Math.floor(Math.random() * 11);

var result = number1 > 5 ? "Nummeret er større end 5" : "Nummeret er lavere end 5";
console.log(result);
console.log(number1);

//----------------------------------

var drik = "vand";

if(drik == "cola"){
    console.log("Cola er ikke min favorit");
}else if(drik == "vand"){
    console.log("Vand er min favoritdrik");
}else{
    console.log("Min favoritdrik kan ikke findes");
}

//----------------------------------

var drik1 = "guanana";

switch (drik1) {
    case "vand":
        console.log("Vand er min favorit");
        break;
    case "cola":
        console.log("Cola er det bedste i verden");
        break;
    case "fanta":
        console.log("Fanta er top 1");
        break;
    default:
        console.log("Min favoritdrik findes ikke her");
        break;
}