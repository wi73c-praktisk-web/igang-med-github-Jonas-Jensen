// 50km/t

function fartbode50(hastighed) {
    if (hastighed > 50 && hastighed < 60) {
        console.log("Hastighed: " + hastighed + "\n" + "Bøde: 1000kr");
        console.log("Under vejarbejde vil bøden være: 2000kr");
    }
    else if (hastighed > 59 && hastighed <= 64) {
        console.log("Hastighed: " + hastighed + "\n" + "Bøde: 1500kr");
        console.log("Under vejarbejde vil bøden være: 3000kr");
    }
    else if (hastighed == 65 ) {
        console.log("Hastighed: " + hastighed + "\n" + "Bøde: 2500kr");
        console.log("Under vejarbejde vil bøden være: 5000kr");
    }
    else if (hastighed > 65 && hastighed < 70) {
        console.log("Hastighed: " + hastighed + "\n" + "Bøde: 2500kr" + "\n" + "Klip i kortet");
        console.log("Under vejarbejde vil bøden være: 5000kr");
    }
    else if (hastighed >= 70 && hastighed <= 80) {
        console.log("Hastighed: " + hastighed + "\n" + "Bøde: 3000kr"  + "\n" + "Klip i kortet");
        console.log("Under vejarbejde vil bøden være: 6000kr");
    }
    else if(hastighed > 80) {
        console.log("Ikke regnet så højt.");
    }else{
        console.log("Du kører pænt, ingen bøde til dig.");
    }
}

fartbode50(70);

