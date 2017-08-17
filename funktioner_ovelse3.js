function profil(info) {
    var dato = new Date();
    var year = dato.getFullYear();
    
    return info[0] + " " + info[1] + "\nEr: " + (year - info[2]) + " år gammel";
}
var x = ["Joe", "Jensen", 1994];

console.log(profil(x));