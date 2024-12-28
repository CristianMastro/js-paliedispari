// Restituisce un numero tra 1 e 5//
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;  
}

// Funzione per controllo e selezione dati//

function selectPari() {
    let pariDispari = prompt("Scegli 'pari' o 'dispari'").toLowerCase();
    if (pariDispari !== "pari" && pariDispari !== "dispari") {
        alert("Scelta non valida. Devi scegliere 'pari' o 'dispari'.");
        return null;  
    }
    return pariDispari
}

function selectNumber() {
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        alert("Numero non valido. Devi inserire un numero tra 1 e 5.");
        return null;
    }
    return numeroUtente
}

function controlPari(somma) {
    return somma % 2 === 0 ? "pari" : "dispari";
}

// funzione per dichiarare vincitore //

function winner(pariDispari, numeroUtente, numeroComputer) {
    let somma = numeroUtente + numeroComputer;
    let risultato = controlPari(somma);

    console.log(`L'utente ha scelto ${pariDispari}`);
    console.log(`L'utente ha scelto il numero ${numeroUtente}`);
    console.log(`Il computer ha generato il numero ${numeroComputer}`);
    console.log(`La somma è ${somma} e quindi è ${risultato}`);

    if (pariDispari === risultato) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    }
}

// Chiediamo i dati all'utente//
let sceltaPariDispari = selectPari();
let sceltaNumero = selectNumber();

if (sceltaPariDispari !== null && sceltaNumero !== null) {
    let pariDispari = sceltaPariDispari;
    let numeroUtente = sceltaNumero;
    let numeroComputer = generaNumeroCasuale();
    winner(pariDispari, numeroUtente, numeroComputer);
}

