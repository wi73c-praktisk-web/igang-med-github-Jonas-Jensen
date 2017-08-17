function lommeregner() {
    var result = 0;
    return {
        add: function (x) {
            result = result + x;
        },
        sub: function (x) {
            result = result - x;
        },
        multi: function (x) {
            result = result * x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = lommeregner();
calc.add(5);
calc.multi(5);
console.log(calc.result());