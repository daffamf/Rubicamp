function weirdMultiply(sentence) {
    var angka = sentence.toString().split('')
    var realAngka = angka.map(Number)
    if (realAngka.length > 1) {
        var arr = 1
        for (let i = 0; i < realAngka.length; i++) {
            arr = arr * realAngka[i]
        }
        return weirdMultiply(arr)
    } else {
        return sentence
    }
}
console.log(weirdMultiply(39)); // output 4
console.log(weirdMultiply(999)); // output 2
console.log(weirdMultiply(3));  // output 3

