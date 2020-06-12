let biodata = {
  id: "17010197",
  nama: "M Hafidz Masruri",
  lahir: {
    tempat: "Lumajang",
    tgl: "1998-07-27",
  },
  favorit: [
    "ngoding",
    "membaca",
    "ngaji",
    {
      olahraga: ["Lari", "Footbal"],
      makanan: ["Mie", "Nasi Goreng"],
    },
  ],
  alamat: {
    jalan: "Jl. Manggis",
    kelurahan: "Jambekumbu",
    kecamatan: "Pasrujambe",
    kota: "Lumajang",
    provinsi: "Jawa Timur",
    kodePos: 36120,
  },
};

// akses object
console.log(biodata.nama);
console.log(biodata.alamat.kota);
console.log(biodata.favorit[3].makanan[1]);
// hasil: M Hafidz Masruri
// Lumajang
// Nasi Goreng

console.log(biodata.nama);
// M Hafidz Masruri

biodata.nama = "Uchiha Itachi";
console.log(biodata.nama);
// Uchiha Itachi
