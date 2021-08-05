// function spiral(param1) {
//     var Data = [];
//     var array = new Array();


//     for (let i = 0; i < param1; i++) {
//         array[i] = new Array()
//         for (let j = 0; j < param1; j++) {
//             array[i][j] = (i * param1) + j
//         }
//     }
//     while (array.length > 1) {
//         Data = Data.concat(array.splice(0, 1)[0]);
//         for (var idx in array) {
//             Data.push(array[idx].splice(-1)[0]);
//         }
//         Data = Data.concat(array.splice(-1, 1)[0].reverse());
//         for (var idx = array.length - 1; idx >= 0; idx--) {
//             Data.push(array[idx].splice(0, 1)[0]);
//         }
//     } if (array.length > 0) {
//         Data.push(array.pop()[0]);
//     }
//     console.log(Data)

// }
// spiral(5)
// spiral(6)
// spiral(7)


function spiral(param1) {
    const results = [];
    for (let i = 0; i < param1; i++) {
        results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = param1 - 1;
    let startRow = 0;
    let endRow = param1 - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
}
console.log(spiral(5))
console.log(spiral(6))
console.log(spiral(7))