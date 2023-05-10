var http = require('http');

var nama = 'Dedi Indrawan';
var tempatLahir = 'Jakarta';
var tanggalLahir = '8 Desember 1988';
var alamat = 'Jl.Griya Citayam Asri No.90 Susukan, Bojong Gede - Bogor 16920'

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        `
        Nama: ${nama} <br> Tempat Lahir: ${tempatLahir} <br> Tanggal Lahir: ${tanggalLahir} <br> Alamat: ${alamat}
        `
    );
    res.end();
}).listen(1208);