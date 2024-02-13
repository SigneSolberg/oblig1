
//det skal lages en javascript-applikasjon som registerer kjlo av kinobiletter
//Det er kun tre filer som du selc skal skrive eller redigdere. En HTML-fil, en javaScript-fil
//og en README.med-fil. Du skal likevel levere et komplett prosjekt hvor disse tre filene
//ligger på rikitg sted i mappe-og filstrukturen(altså HTML-og javascriptfil, under
// "<projektnavn>/scr/main/resources/static" og README.MD I ROTKATALOGEN.

//Etter at kanppen "kjøp bilett" er trykket skal biletten lagres som et obejkt i array.
//deretter skal arrayet listes ut under "alle billeyyer".etter det er registret en bestilling
//skal alle inputfelt "blankes" slik at en ny bilett kan registreres.
//Knappen "slett alle bilettene" skal slette alle billettene(tømme arrayet).

//Det skal også lages en input-valdiering som sjekker at alle inputfeltene inneholder noe

<script type = "application/javascript"></script>
const kinoBilletter=[];

    function VelgFilm() {
    ut += "<br/> FilmValg : " + document.getElementById("film").value;
}
function Antall(){
        document.getElementById("Antall").value;
}
    function kjøpeBillett() {
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const person = {
    fornavn : fornavn,
    etternavn : etternavn,
    telefonnr : telefonnr,
    epost : epost,
    };

 kinoBilletter.push(person);

 document.getElementById("fornavn").value ="";
 document.getElementById("etternavn").value = "";
 document.getElementById("telefonnr").value= "";
  document.getElementById("epost").value= "";
  viskjøptBillett()}

//skriver kode for å tømme arrayet


function viskjøptBillett() {
    let ut = "<table><tr>" + "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for (let k of kinoBilletter) {
        ut += "<tr>";
        ut += "<td>" + k.fornavn + "</td><td>" + k.etternavn + "</td><td>" + k.telefonnr + "</td><td>" + k.epost + "</td>";
        ut += "</tr>";
    }
    ut+= "</table>";
    document.getElementById("viseKjøpteBilletter").innerHTML = ut;
}
    //oppretter funskjon for å vise de kjøpebillettene



