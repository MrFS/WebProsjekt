﻿//Dette er en JavaScript
//Denne aktiveres hver kan det registreres en onKeyPress & onKeyUp
//Dette gir en "Live" følelse
//Koden ser gjennom tallene i textboxen "medlemsnumer", stemmer de overens
//printer den ut en textverdi til <span id="medlem"> (Y)

//Det å ha medlemsnummrene i selve JavaScript filen utgjør en betydelig sikkerhetsrisiko
//Noe som ikke er aktuelt for en seriøs aktør. Dette løses ved å bruke serverside språk slik som PHP.

function edValueKeyPress() {

    if (document.forms["frm"].medlemsnummer.value == "15822454" ||
        document.forms["frm"].medlemsnummer.value == "442548464" ||
        document.forms["frm"].medlemsnummer.value == "4567782312" ||
        document.forms["frm"].medlemsnummer.value == "46547784" ||
        document.forms["frm"].medlemsnummer.value == "54646874" ||
        document.forms["frm"].medlemsnummer.value == "13449937" ||
        document.forms["frm"].medlemsnummer.value == "104452214" ||
        document.forms["frm"].medlemsnummer.value == "0001754577" ||
        document.forms["frm"].medlemsnummer.value == "121254564" ||
        document.forms["frm"].medlemsnummer.value == "46547544" ||
        document.forms["frm"].medlemsnummer.value == "132378945" ||
        document.forms["frm"].medlemsnummer.value == "1348646345" ||
        document.forms["frm"].medlemsnummer.value == "456458787" ||
        document.forms["frm"].medlemsnummer.value == "45678612" ||
        document.forms["frm"].medlemsnummer.value == "6" ||
        document.forms["frm"].medlemsnummer.value == "1337") {
              document.getElementById('medlem').innerHTML = 'Du har skrevet ett gyldig medlemsnummer. <br /> 20% vil bli trukket fra på sluttfaktura.';
    }

}
