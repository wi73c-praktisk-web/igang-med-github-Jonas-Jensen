# GitHuB Repository

## Sådan opretter du et repository på GitHub.

* Tryk på plusset(+) øverst i højre hjørne af skærmen og tryk 'New Repository'.
* Under owner ændrer du den til gruppen du vil dele den selv, eller dig selv hvis kun du vil se det.
* Under name kan du navngive den som du har lyst. Det er smart at skrive sit eget navn til sidst.
* Description kan udfyldes med en lille tekst omkring indholdet.
* Ved public og private, vælger du om folk i gruppen skal kunne se indholdet, eller kun dig og læreren.
* Sæt et kryds i 'Initialize this repository with README' for at få en tom ReadMe fil med.
* Ved .gitignore ændrer du den til 'Node' for at bruge node modulet.

## Link til hjemmesider

Link til hjemmesider med navn i firkantet parentes og adressen i almindelig parentes ex.
```
[Youtube](http://youtube.com)
```

[google](http://google.dk)

## Mindre overskrift med flere hashtags

### Lav så mange du vil

#### Flere hashtags = mindre overskrift

## Print til konsol.

 Nedenstående kode viser hvordan du kan printe indhold til kommandoprompten/konsollen. 'Hej verden' kan ændres til andet tekst eller en variabel.

```javascript

    console.log('Hej verden');

```

## If-else condition

En _If-else_ sætning kan bruges til at udføre forskellige stumper kode afhængig af forskellige værdier.

```javascript

if(number > 5){
    console.log('Number er større end 5');
}else if(number < 5){
    console.log('Number er lavere end 5');
}else{
    console.log('Number er 5');
}

```
Hvilken kode der bliver kørt kommer an på på den værdi number har. Hvis number er større end 5, printes den øverste. Hvis number er lavere end 5 printes den midterste. Eller hvis ingen af de to bliver opfyldt, bliver den sidste opfyldt.

## Operatorer

* (=)     Giver en værdi til en variabel
* (==)    Spørger om de har den samme værdi
* (===)   Spørger om de har den samme værdi og samme datatype
* (!)     Betyder ikke
* (!=)    Kan oversættes til 'Hvis ikke' de har samme værdi
* (!==)   Hvis ikke de har samme værdi og datatype
* (<)     Mindre end
* (>)     Større end
* (<=)    Mindre eller det samme som
* (>=)    Større eller det samme som
* (+)     Lægger to værdier sammen
* (-)     Trækker to værdier fra hinanden
* (*)     Ganger to værdier med hinanden
* (/)     Dividerer to værdier med hinanden
* (%)     Den tager resten af to dividerede tal
* (&&)    Kan overssættes til 'Og' Hvis to eller flere betingelser skal opfyldes
* (||)    Kan oversættes til 'Eller' Hvis bare en ud af flere betingelser skal opfyldes

## For-løkke

En for-løkke kan bruges til at udføre den samme kode flere gange med forskellige værdier.


```javascript

for(var count4 = 2017; count4 >= 1917; count4--){
    console.log(count4);
}

```

fx. vil denne kode udskrive alle tal mellem 2017 og 1917 inklusiv de to. 

## Funktioner

En funktion er et stykke kode som kan blive skrevet af brugeren eller være indbygget i sproget. Det stykke kode der findes i en funktion vil ikke blive udført medmindre at funktionen bliver kaldt.


```javascript

function hello() {
    console.log("Hej..");
}

hello();

```

Her bliver der lavet en funktion "hello", som udskriver værdien "Hej..". Dog vil kodestykket først blive kørt når funktionen bliver kaldt ved at skrive "hello();"