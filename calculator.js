function calculator() {
    var result = 0;
    return {
        add: function(x,y) {
            result = x + y;
        },
        sub: function(x,y) {
            result = x - y;
        },
        multi: function(x,y) {
            result = x * y;
        },
        divide: function(x,y) {
            result = x / y;
        },
        squaeroot: function(x) {
            result = x * x;
        },
        result: function() {
            return result;
        }
    }
}

var calc = calculator();

//------------------------------

// var rl = require("readline");
// var prompts = rl.createInterface(process.stdin, process.stdout);


// prompts.questions("tast p for plus, m for minus, g for gange, d for dividere, k for kvadratrod ");

//console.log("tast p for plus, m for minus, g for gange, d for dividere, k for kvadratrod ");
var valg = ("")

if(valg == "p") {
    console.log(valg + " + ? ");
    var inp = readline();
    var result = p + inp;
    console.log(result);
}else if(valg == "m"){
    console.log(valg + " - ? ");
    var inp = readline();
    var result = p - inp;
    console.log(result);
}else if(valg == "g") {
    console.log(valg + " * ? ");
    var inp = readline();
    var result = p * inp;
    console.log(result);
}else if(valg == "d") {
    console.log(valg + " / ? ");
    var inp = readline();
    var result = p / inp;
    console.log(result);
}

// var inp = raw.input();
// var inp2 = raw.input();

// calc.squaeroot(10); // Ændr tal her

// console.log(calc.result());