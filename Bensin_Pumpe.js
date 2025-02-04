window.onload = oppstart;

function oppstart(){
    document.querySelector("#bensin").onclick = LiterRegning;

}

function LiterRegning(){
    let Liter = (document.querySelector("#tall").value);
    const Pris = 22;
    let Sum = Liter * Pris;

    if (isNaN(Liter)){
        document.querySelector("#utskrift").innerHTML = "Vennligst skriv inn et tall";

    }

    else if(Sum){
        document.querySelector("#utskrift").innerHTML = "Du må betale " + Sum + "kr, for " + Liter + " liter bensin.";

    }

}