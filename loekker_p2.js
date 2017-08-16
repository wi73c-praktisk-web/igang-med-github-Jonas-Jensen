var navne = [
    "Emil",
    "Jonas",
    "Jon",
    "Jonny",
    "Joni",
    "Joe",
    "Joy",
    "Jolio"
]

navne.forEach(function(navn){
    console.log(navn);
});
console.log(" ");

//--------------

var musik = [
    "Akon",
    "Jack",
    "Frank",
    "Ady"
]

musik.forEach(function(musiker, index){
    console.log(musiker + " " + index);
});
console.log(" ");

//----------------------------

var tal = [
    12,
    23,
    87,
    43,
    98,
    67,
    53,
    76,
    54,
    64
]

var num1 = 0;

tal.forEach(function(nummer, index, arr){
    if(arr[num1] > arr[num1 + 1]){
        console.log(arr[num1] + " er større end " + arr[num1 + 1]);
        arr[num1++];
    }else if(index == arr.length-1){
        if(arr[num1] > arr[0]){
            console.log(arr[num1] + " er større end " + arr[0]);
            arr[num1++];
        }else{
            console.log(arr[num1] + " er ikke større end " + arr[0]);
            arr[num1++];
        }
    }else{
        console.log(arr[num1] + " er ikke større end " + arr[num1 + 1]);
        arr[num1++];
    }
});

