  //Oppretter et array
const kinoBilletter=[];

//Oppretter en funksjon for å velge film
    function velgFilm() {
    document.getElementById("film").value;
}
//Funksjonen hvor man velger antall billetter
function antall(){
        document.getElementById("antall").value;
}
//Funksjon for å kjøpe billett og lagrer det som blir skrevet inn i input feltene
 function kjøpeBillett() {
     const film = document.getElementById("film").value;
     const antall = document.getElementById("antall").value;
     const fornavn = document.getElementById("fornavn").value;
     const etternavn = document.getElementById("etternavn").value;
     const telefonnr = document.getElementById("telefonnr").value;
     const epost = document.getElementById("epost").value;

  // tømme og fjerne feilmeldingene når man får kjøpt billett og skrevet inn rikitg informasjon
    document.getElementById("feilAntall").innerHTML="";
    document.getElementById("feilFornavn").innerHTML="";
    document.getElementById("feilEtternavn").innerHTML="";
    document.getElementById("feilTelefonnr").innerHTML="";
    document.getElementById("feilEpost").innerHTML="";

   //Her har jeg if-setninger (for å få frem feilmeldinger) for antall, fornavn,etternavn,telefonnr og epost.
     if (antall <=0 || isNaN(antall)) {
         document.getElementById("feilAntall").innerHTML
             = "Feil, skriv inn et heltall";
     }
     if (fornavn.length === 0 || !isNaN(fornavn)) {
         document.getElementById("feilFornavn").innerHTML
             = "Feil skrevet, skriv KUN med bokstaver";
     }
     if (etternavn.length === 0 || !isNaN(etternavn)){
         document.getElementById("feilEtternavn").innerHTML
             = "Feil etternavn, skriv KUN med bokstaver";
     }
     if (telefonnr.length !== 8 ||isNaN(telefonnr)) {
         document.getElementById("feilTelefonnr").innerHTML
             = "Feil telefonnr, skriv et telefonnr med 8 siffer";
     }
     //Her har jeg brukt en REGEX for validering av epost
     if(!/\S+@\S+\.\S+/.test(epost)){
         document.getElementById("feilEpost").innerHTML
             ="Feil epost, prøv på nytt";
     }
     else {
       //Oppretter objekt for person informasjon
             const person = {
                 film: film,
                 antall: antall,
                 fornavn: fornavn,
                 etternavn: etternavn,
                 telefonnr: telefonnr,
                 epost: epost,
             };
        //Skriver kode for å tømme arrayet
             kinoBilletter.push(person);
             document.getElementById("film").value = "";
             document.getElementById("antall").value = "";
             document.getElementById("fornavn").value = "";
             document.getElementById("etternavn").value = "";
             document.getElementById("telefonnr").value = "";
             document.getElementById("epost").value = "";

       //Viser de kjøpte billettene
             viskjøptBillett()
       }
 }
    //Funksjon for å vise de kjøpte billettene
     function viskjøptBillett() {
         let ut = "<table><tr>" + "<th>Film</th><th>Antall</th>" +
             "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +"</tr>";
         for (let k of kinoBilletter){
             ut += "<tr>";
             ut += "<td>" + k.film + "</td><td>" + k.antall
                 +"</td><td>" + k.fornavn + "</td><td>" + k.etternavn +"</td><td>"
                 + k.telefonnr + "</td><td>" + k.epost + "</td>";
             ut += "</tr>";
         }
         document.getElementById("viseKjøpteBilletter").innerHTML = ut;
     }
     //Oppretter en funksjon for å slette de kjøpte billettene ved at man trykker på (slett alle billetter)
     function slettAlleBilletter() {
         kinoBilletter.length = 0;
         {
      document.getElementById("viseKjøpteBilletter").innerHTML = "Alle billettene har blitt slettet";
         }
     }










