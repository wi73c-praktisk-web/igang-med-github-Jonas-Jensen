// Disse oplysninger kommer selvfølgelig typisk fra en formular
var navn = "John";
var alder = "";
var adresse = "";

var fejlbeskeder = "";

if (navn == "") {
	fejlbeskeder += "Du skal udfylde navn feltet\n";
}

if (alder == "") {
	fejlbeskeder += "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
	fejlbeskeder += "Du skal udfylde adresse feltet";
}

console.log (fejlbeskeder);