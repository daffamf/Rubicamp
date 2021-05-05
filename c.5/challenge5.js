function stingmanipulation(word) {
    var kaki = word[0]
    if (kaki === 'a')
        return word
    else if (kaki === 'i')
        return word
    else if (kaki === 'u')
        return word
    else if (kaki === 'e')
        return word
    else if (kaki === 'o')
        return word
    else {
        return word.slice(1) + kaki + 'nyo'
    }

}

console.log(stingmanipulation('ayam'));
console.log(stingmanipulation('bebek'));