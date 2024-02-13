

const kinoBilletter=[];

     //funkjson for å velge film
    function velgFilm() {
    ut += "FilmValg:" + document.getElementById("film").value;

}
//Funksjonen hvor man velger antall billetter
function antall(){
        document.getElementById("antall").value;

}
//Funksjon for å kjøpebillet samt input av tekst
    function kjøpeBillett() {
    const film = document.getElementById("film").value;
    const antall= document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const person = {
    film : film,
    antall : antall,
    fornavn : fornavn,
    etternavn : etternavn,
    telefonnr : telefonnr,
    epost : epost,
    };

 //skriver kode for å tømme arrayet
 kinoBilletter.push(person);

 document.getElementById("film").value ="";
 document.getElementById("antall").value ="";
 document.getElementById("fornavn").value ="";
 document.getElementById("etternavn").value = "";
 document.getElementById("telefonnr").value= "";
  document.getElementById("epost").value= "";
  viskjøptBillett()}


function viskjøptBillett() {
    let ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for (let k of kinoBilletter) {
        ut += "<tr>";
        ut += "<td>" +k.film+ "</td><td>"+ k.antall+ "</td><td>"+ k.fornavn + "</td><td>" + k.etternavn + "</td><td>" + k.telefonnr + "</td><td>" + k.epost + "</td>";
        ut += "</tr>";
    }

    document.getElementById("viseKjøpteBilletter").innerHTML = ut;

}
    //oppretter funskjon for å vise de kjøpte billettene
function slettAlleBilletter(){
    kinoBilletter.length = 0;{
        document.getElementById("viseKjøpteBilletter").innerHTML = "Alle billettene har blitt slettet";
    }
}








