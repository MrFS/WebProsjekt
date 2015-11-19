//function MedlemsNummero() {
//    if (document.forms['frm'].medlemsnummer.value == "1234567890") {
//        alert('Message body is empty');
//    }
//}

//function onLoadd() {
//    onload.medlem.innerHTML = ("Trolololololo");
//}


//function chkMedlem() {
//    if (document.forms["frm"].medlemsnummer.value == "1337") {
//        alert("rewrwerewerwerw");
//        document.getElementById('medlem').innerHTML = 'your tip has been submitted!';
//    }
//}

function edValueKeyPress() {
    var edValue = document.getElementById("medlemsnummer");
    var s = edValue.value;

    var lblValue = document.getElementById("medlem");
    lblValue.innerText = "The text box contains: " + s;

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

    //var s = $("#edValue").val();
    //$("#lblValue").text(s);    
}

//function addLoadEvent(func) {  
//    var oldonload = window.onload;  
//    if (typeof window.onload != 'function') {  
//        window.onload = func;  
//    } else {  
//        window.onload = function() {  
//            if (oldonload) {  
//                oldonload();  
//            }  
//            func();  
//        }  
//    }  
//}  

//addLoadEvent(function() {  
//    document.getElementById('medlem').innerHTML = 'your tip has been submitted!';
//})
