hello();

function hello() {
    console.log("Hej..");
}

//--------------------------

emilstabil('Med dig');

function emilstabil(who) {
    console.log('Hej', who);
}

emilstabil('Hej');

//--------------------------

//hey("test"); Skaber fejl.

var hey = function hello(value) {
    console.log(value);
}

hey("test");

//--------------------------

var navn = [
    "Jonas",
    "Jensen",
    "1994",
    "June"
]

//Gør det samme
navn.forEach(function(element) {
    console.log(element);
})
//Same
for(i = 0; i < navn.length; i++) {
    console.log(navn[i]);
}


//---------------------------

var text = "";
var farray = [["a","b","c"],["d","e","f"],["g","h","i"]];

farray.forEach(function(element1) {
    element1.forEach(function(item){
    text += item + "\n";
    })
})
console.log(text);
