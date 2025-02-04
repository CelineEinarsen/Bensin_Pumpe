window.onload = oppstart;
//Starter funksjon

function oppstart(){
    document.querySelector("#bensin").onclick = LiterRegning;
//Legger til funksjon til button
}
//Starter funksjon oppstart
function LiterRegning(){
//Starter funksjon liter regning
    let Liter = (document.querySelector("#tall").value);
    const Pris = 22;
    let Sum = Liter * Pris;
//lager variabel

    if (isNaN(Liter)){
//hvis input ikke er tall, skriv feil melding
        document.querySelector("#utskrift").innerHTML = "Vennligst skriv inn et tall";

    }

    else if(Sum){
//hvis input er tall, regn ut.
        document.querySelector("#utskrift").innerHTML = "Du må betale " + Sum + "kr, for " + Liter + " liter bensin.";

    }
//Avslutt funksjon
}
LiterRegning();
