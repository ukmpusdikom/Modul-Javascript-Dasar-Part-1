// slice
let bilangan = [0, 1, 2, 3, 4];
let potongan = bilangan.slice(1, 3);
console.log(potongan);
// hasil: [1, 2]
let potonganLain = arr.slice(1);
console.log(potonganLain);
// hasil: [1, 2, 3, 4]

// array multidimensi
let matriks = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matriks[0]);
// hasil: [1, 2]
console.log(matriks[0][1]);
// hasil: 2
let mahasiswa = [
  ["M Hafidz Masruri", "Universitas Nurul Jadid"],
  ["Deddy Gunawan", "Universitas Pancasila"],
  ["Windy Claudya", "Universitas Padjajaran Bandung"],
  ["Nisawatul Khoiriyah", "Universitas Unpas Bandung"],
];
console.log(mahasiswa[1]);
// hasil:  "Deddy Gunawan", "Universitas Pancasila"
console.log(mahasiswa[0][1]);
// hasil: '"Universitas Nurul Jadid"
