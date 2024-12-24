let word = prompt (`Inserisci una parola palindroma`)

//CONTROLLO PAROLA PALINDROMA//

function wordPalindroma(word) {
    let wordLowerCase = word.toLowerCase()
    let wordNew = wordLowerCase.split(``).reverse().join(``)
    return wordLowerCase === wordNew    
}


if (Number(word)){
    console.log(`inserisci una parola`)
} else if (wordPalindroma(word)) {
    console.log(`La parola è palindroma`)
} else {
    console.log(`La parola non è palindroma`)
}

