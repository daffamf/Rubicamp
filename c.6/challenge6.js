function stringManipulation(word) {
    let huruf_dpn = word[0]
    if (huruf_dpn === 'a')
        return word
    else if (huruf_dpn === 'i')
        return word
    else if (huruf_dpn === 'u')
        return word
    else if (huruf_dpn === 'e')
        return word
    else if (huruf_dpn === 'o')
        return word
    else {

        return word.slice(1) + huruf_dpn + 'nyo'

    }

}
function sentencesManipulation(sentences) {
    let vet = sentences.split(' ')
    let hasil = [];
    for (let i = 0; i < vet.length; i++) {
        hasil += stringManipulation(vet[i]) + ' '
    }
    return hasil
}

console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'))