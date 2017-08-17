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
        result: function() {
            return result;
        }
    }
}

var calc = calculator();
calc.add(5,9);

console.log(calc.result());