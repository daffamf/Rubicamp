function spiral(param1) {
    var Data = [];
    var array = new Array();
   

    for (let i = 0; i < param1; i++) {
        array[i] = new Array()
        for (let j = 0; j < param1; j++) {
            array[i][j] = (i * param1) + j
        }
    }
    while (array.length > 1) {

        Data
            = Data
                .concat(array.splice(0, 1)[0]);

        for (var idx in array) {
            Data
                .push(array[idx].splice(-1)[0]);
        }
        Data
            = Data
                .concat(array.splice(-1, 1)[0].reverse());

        for (var idx = array.length - 1; idx >= 0; idx--) {
            Data
                .push(array[idx].splice(0, 1)[0]);
        }
    } if (array.length > 0) {
        Data
            .push(array.pop()[0]);
    }
    console.log(Data)

}
spiral(5)
spiral(6)
spiral(7)