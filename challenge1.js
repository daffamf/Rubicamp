
function sum() {
    let penjumlahan = 0;
    for (let i = 0; i < arguments.length; i++) {
      penjumlahan += arguments[i];
    }
    console.log(penjumlahan)
  }
  sum(1, 2, 7);//10
  sum(1, 4);//5
  sum(11);//11
  sum(10, 3, 6, 7, 9);//35