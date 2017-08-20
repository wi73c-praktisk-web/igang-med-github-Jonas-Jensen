var height = 1.88;       //Indtast din højde her
var weight = 92;        //Indtast din vægt her
var bmi =  Math.round(weight / (height * height));

if(bmi <= 18.5) {
    console.log("Din bmi er " + bmi + " hvilket er undervægtig");
}
else if(bmi >= 18.5 && bmi <= 24.9) {
    console.log("Din bmi er " + bmi + " hvilket er normalt");
}
else if(bmi >= 25 && bmi <= 29.9) {
    console.log("Din bmi er " + bmi + " hvilket er overvægtig");
}
else if(bmi >= 30 && bmi <= 39.9) {
    console.log("Din bmi er " + bmi + " hvilket er fedme");
}
else if(bmi >= 40) {
    console.log("Din bmi er " + bmi + " hvilket er svær fedme");
} else {
    console.log("Ugyldig bmi");
}