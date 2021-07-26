class CarFactory {
   constructor(month) {
      this.month = month;
      this.random = Math.floor(Math.random() * (100 - 50)) + 50;
   }
} class Car extends CarFactory {
   constructor(month, year) {
      super(month);
      this.year = year;
   }
   garansi() {
      var result = this.year + Math.floor(Math.random() * (6 - 3)) + 3;
      let startcamry = new camry();
      let startyaris = new yaris();
      let startCF = new CarFactory();
      console.log("");
      console.log(`Produksi bulan ${this.month} sebanyak ${startCF.random} unit`);
      console.log(`Mobil ${startcamry.brend} bergaransi sampai tahun ${result}`)
      console.log("Brend               : " + startcamry.brend);
      console.log("Merek Roda          : " + startcamry.tyre);
      console.log("Jumlah Tempat Duduk : " + startcamry.seat);
      console.log("Jumlah Pintu        : " + startcamry.door);
      console.log("");
      console.log(`Produksi bulan ${this.month} sebanyak ${startCF.random} unit`);
      console.log(`Mobil ${startyaris.brend} bergaransi sampai tahun ${result}`)
      console.log("Brend               : " + startyaris.brend);
      console.log("Merek Roda          : " + startyaris.tyre);
      console.log("Jumlah Tempat Duduk : " + startyaris.seat);
      console.log("Jumlah Pintu        : " + startyaris.door)
   }
} class tyre {
   constructor() {
      const tyreBrands = ['Bridgestone', 'dunlop', 'Achilles'];
      this.tyreBrand = tyreBrands[Math.floor(Math.random() * 3)]
   }
} class camry extends Car {
   constructor() {
      super();
      this.tyre = new tyre().tyreBrand;
      this.seat = 4;
      this.door = 4;
      this.brend = "camry"
   }
} class yaris extends Car {
   constructor() {
      super();
      this.tyre = new tyre().tyreBrand;
      this.seat = 4;
      this.door = 4;
      this.brend = "yaris"
   }
} const l = new Car('Desember', 2019);
l.garansi();