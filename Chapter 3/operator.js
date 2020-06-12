// operator assingment
let angka = 10;
angka += 10;

console.log(angka);
// hasil: 20

// operator aritmatika
let bil1 = 10,
  bil2 = 10;
let jumlah = bil1 * bil2;
console.log(jumlah);
// hasil: 100

// operator pembanding
console.log(5 > 1);
// hasilnya: true, karena 5 lebih besar dari 1
console.log(2 <= 3);
// hasilnya: true, karena 2 lebih kecil dari 3
console.log(3 == 2);
// hasilnya: false, karena 3 tidak sama dengan 2
console.log(0 == false);
// hasilnya: true, karena 0 dianggap false dalam javascript
console.log(1 === true);
// hasilnya: false, karena tipe data berbeda

// operator logika
console.log(5 > 3 && 10 > 5);
// hasil: true
console.log(true || 1 > 5);
// hasil: true
console.log(!true);
// hasil: false

// operator kenaikan dan turunan

// pra
let hitung = 0;
console.log(++hitung);
// hasil: 1
console.log(hitung);
// hasil: 1

// pasca
let hitung = 0;
console.log(hitung--); // 0
console.log(hitung); // -1

// operator ternary

let lapar = true;
lapar
  ? console.log("Kamu butuh makan")
  : console.log("Slow aja kamu gak lapar kok hehe");
// hasil: Kamu butuh makan
