var brugernavn = "John";
var password = "";
var email = "";

var fejlbeskeder = [];

if (brugernavn == "") {
	fejlbeskeder.push("Du skal udfylde brugernavn feltet");
}

if (password == "") {
	fejlbeskeder.push("Du skal udfylde password feltet");
}

if (email == "") {
	fejlbeskeder.push("Du skal udfylde email feltet");
}

console.log (fejlbeskeder);