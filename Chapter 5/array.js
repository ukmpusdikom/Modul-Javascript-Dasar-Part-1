let makanan = ["pisang", "susu", "indomie"];
console.log(makanan[2]);
// hasil: indomie;

// ubah isi array
let nama = ["hafid", "naruto", "boruto", "luffy"];
nama[2] = "Mitsuki";
console.log(nama[2]);
// hasil: Mitsuki

// concact array
let buah = ["pisang", "jeruk", "mangga", "lemon"];
let sayuran = ["Tomat", "Kentang", "Kubis", "Bawang", "Wortel"];
let isiKulkas = buah.concat(sayuran);
console.log(isiKulkas);
// hasil: ['pisang', 'jeruk', 'mangga', 'lemon', 'Tomat',
// 'Kentang', 'Kubis', 'Bawang', 'Wortel']

// array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// hasil: [1,2,3,4,5,6]

// length
let mahasiswa = ["Deddy", "Hasyim", "Dian"];
console.log(mahasiswa.length);
// hasil: 3

// IndexOf
console.log("========= IndexOf ========== ");
// IndexOf berfungsi mengecek apakah ada item dalam array, jika
//ada maka kembalikan nilai dari
// indeks tersebut,jika tidak ada maka akan mengembalikan nilai -1

let isiKeranjang = ["semangka", "pisang", "mangga", "apel"];
let index = isiKeranjang.indexOf("semangka");
console.log(index);
// hasil: 0
if (index == 0) {
  console.log("Buah tersebut ada dalam kulkas, silahkan ambil");
} else {
  console.log("Buah itu belum tersedia dalam kulkas");
}
// hasil: Buah tersebut ada dalam kulkas, silahkan ambil

// Join
let mugiwara = ["Luffy", "Zorro", "Sanji", "Nami"];
console.log(mugiwara.join());
// hasil: Luffy,Zorro,Sanji,Nami
console.log(mugiwara.join(" atau "));
// hasil: Luffy atau Zorro atau Sanji atau Nami
console.log(mugiwara.join("**"));
// hasil: Luffy**Zorro**Sanji**Nami
console.log(mugiwara.join(", "));
// hasil: Luffy, Zorro, Sanji, Nami
console.log(mugiwara.join("-"));
// hasil: Luffy-Zorro-Sanji-Nami

// push
let angka = [0, 1, 2, 3];
angka.push(4);
console.log(angka);
// hasil: [0, 1, 2, 3, 4]

// pop
let bilangan = [0, 1, 2, 3];
bilangan.pop();
console.log(bilangan);
// hasil: [0, 1, 2]

// unshift
let bil = [0, 1, 2];
bil.unshift(3);
console.log(bil);
// hasil: [3, 0, 1, 2]

// shift
let integer = [3, 0, 1, 2];
integer.shift();
console.log(integer);
// hasil: [0, 1, 2]

// Sort
let urut = [3, 5, 7, 1, 2];
urut.sort();
console.log(urut);
// hasil: [1, 2, 3, 5, 7]

let pelajar = ["Deddy", "Hasyim", "Dian"];
pelajar.sort();
console.log(pelajar);
// hasil: ['Deddy', 'Dian', 'Hasyim']

let sort = [1, 2, 15];
sort.sort();
console.log(sort);
// hasil: [1, 15, 2]

let value = [1, 2, 15];
value.sort(function (value1, value2) {
  return value1 > value2;
});
console.log(value);
// hasil: [15, 2, 1]
