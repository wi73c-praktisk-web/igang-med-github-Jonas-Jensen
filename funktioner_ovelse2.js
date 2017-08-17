var str = "This example slices out a portion of a string from position 7 to position 13:";

function string() {
console.log(str);
var str1 = str.substring(0, 12);
console.log(str1);
}

string(str);

//--------------------------

// Eksempel på en funktion, som returnerer en værdi

function givMigDetDobbelte (tal) {
	return tal * 2;
}

var resultat = givMigDetDobbelte (7);

// Udskriver 14, da det er det dobbelte af 7
console.log (resultat);