
 const kinoBilletter=[];

//funksjon for å velge film
    function velgFilm() {
    ut += "FilmValg:" + document.getElementById("film").value;
}
//Funksjonen hvor man velger antall billetter
function antall(){
        document.getElementById("antall").value;
}
//Funksjon for å kjøpe billett og informasjonen som blir lagret når man trykker på knappen "kjøp billett"
 function kjøpeBillett() {

     const film = document.getElementById("film").value;
     const antall = document.getElementById("antall").value;
     const fornavn = document.getElementById("fornavn").value;
     const etternavn = document.getElementById("etternavn").value;
     const telefonnr = document.getElementById("telefonnr").value;
     const epost = document.getElementById("epost").value;

     //lager en funksjon for å tømme feilmeldingene når man får kjøpt billett
    document.getElementById("feilAntall").innerHTML="";
    document.getElementById("feilFornavn").innerHTML="";
    document.getElementById("feilEtternavn").innerHTML="";
    document.getElementById("feilTelefonnr").innerHTML="";
    document.getElementById("feilEpost").innerHTML="";


     //lager if setninger for hver enkelt antall, fornavn,etternavn, telefonnr og epost
     if (isNaN(antall) || antall <=0) {
         document.getElementById("feilAntall").innerHTML = "Feil, skriv inn et tall";
     }
     if (fornavn.length === 0 || !isNaN(fornavn)) {
         document.getElementById("feilFornavn").innerHTML = "Feil skrevet inn fornavn, skriv kun med bokstaver";
     }
     if (etternavn.length === 0 || !isNaN(etternavn)){
         document.getElementById("feilEtternavn").innerHTML = "Feil skrevet inn etternavn, skriv kun med bokstaver";
     }
     if (telefonnr.length !== 8 ||isNaN(telefonnr)) {
         document.getElementById("feilTelefonnr").innerHTML = "Feil skrevet inn telefonnr, skriv et telefonnr med 8 siffer";
     }
     if (!/\S+@\S+\.\S+/.test(epost)){
         document.getElementById("feilEpost").innerHTML = "Feil skrevet inn epost, prøv på nytt";
     }
     else {
             //oppretter objekt for person
             const person = {
                 film: film,
                 antall: antall,
                 fornavn: fornavn,
                 etternavn: etternavn,
                 telefonnr: telefonnr,
                 epost: epost,
             };

             //skriver kode for å tømme arrayet
             kinoBilletter.push(person);
             document.getElementById("film").value = "";
             document.getElementById("antall").value = "";
             document.getElementById("fornavn").value = "";
             document.getElementById("etternavn").value = "";
             document.getElementById("telefonnr").value = "";
             document.getElementById("epost").value = "";

             //viser de kjøpte billettene
             viskjøptBillett()
       }
 }
//funksjon for å vise de kjøpte bilettene
     function viskjøptBillett() {
         let ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
         for (let k of kinoBilletter) {
             ut += "<tr>";
             ut += "<td>" + k.film + "</td><td>" + k.antall + "</td><td>" + k.fornavn + "</td><td>" + k.etternavn + "</td><td>" + k.telefonnr + "</td><td>" + k.epost + "</td>";
             ut += "</tr>";
         }
         document.getElementById("viseKjøpteBilletter").innerHTML = ut;
     }
     //oppretter en funksjon for å slette de kjøpte billettene ved at man trykker på (slett alle billetter)
     function slettAlleBilletter() {
         kinoBilletter.length = 0;
         {
             document.getElementById("viseKjøpteBilletter").innerHTML = "Alle billettene har blitt slettet";
         }
     }










