for(i=1; i <= 137; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Plum Bus ( " + i + " er deleligt med 3 og 5 )");
    }else if(i % 3 == 0){
        console.log("Plum ( " + i + " er deleligt med 3)");
    }else if(i % 5 == 0) {
        console.log("Bus ( " + i + " er deleligt med 5)");
    }else{
        console.log(i);
    }
}