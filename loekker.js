var counter = 0;

do{
    console.log(counter + " Æbler");
    counter++;
}while(counter <= 50)

//---------------------------

var count1 = 1;

console.log("While");
while(count1 < 26){
    console.log(count1);
    count1++;
}

var count2 = 1;

console.log("Do-While")
do{
    console.log(count2);
    count2++;
}while(count2 <= 25)

console.log("For");
for(var count3 = 1; count3 <= 25; count3++){
    console.log(count3);
}

//------------------------

for(var count4 = 2017; count4 >= 1917; count4--){
    console.log(count4);
}