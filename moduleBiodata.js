var biodata = require('./modules/biodata');

var nama = 'Dedi Indrawan';
var tempatLahir = 'Jakarta';
var tanggalLahir = '8 Desember 1988';
var alamat = 'Jl.Griya Citayam Asri No.90 Susukan, Bojong Gede - Bogor 16920'

console.log('Nama: ' + biodata.myName(nama));
console.log('Tempat Lahir: ' + biodata.myBornPlace(tempatLahir));
console.log('Tanggal Lahir: ' + biodata.myBornDate(tanggalLahir));
console.log('Alamat: ' + biodata.myAddress(alamat));
