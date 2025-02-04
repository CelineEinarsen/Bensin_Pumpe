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
        document.querySelector("#utskrift").innerHTML = "Vennligst skriv inn et tall.";

    }

    else if (Liter > 80){
//Hvis input er større en 80, skriv feilmelding
        document.querySelector("#utskrift").innerHTML = "Tanken din rommer ikke så mye.";

    }

    else if (Liter < 5){
//Hvis input er mindre enn 5, skriv feilmelding
        document.querySelector("#utskrift").innerHTML = "Vi selger ikke så små kvanta bensin.";

    }

    else {
//hvis input er tall, regn ut.
        document.querySelector("#utskrift").innerHTML = "Du må betale " + Sum + "kr, for " + Liter + " liter bensin.";

    }
//Avslutt funksjon
}
