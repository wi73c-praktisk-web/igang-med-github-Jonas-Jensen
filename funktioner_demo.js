hello();

function hello() {
    console.log("Hejjjjj..");
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