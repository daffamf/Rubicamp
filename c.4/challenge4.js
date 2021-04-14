function indexprime(param1) {
    var hasil = new Array()
    var banyak = 0
    var angka = 2

    while (banyak < param1) {
        var faktor = 0
        for (var i = 1; i <= angka; i++) {
            if (angka % i == 0)
                faktor++

        }
        if (faktor == 2) {
            hasil.push(angka)
            banyak++
        }
        angka++
    }
    return hasil[param1 - 1]
}

console.log(indexprime(4)) //result => 7
console.log(indexprime(500)) //result => 3571
console.log(indexprime(37786)) //reuslt => 45881