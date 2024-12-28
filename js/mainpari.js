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
