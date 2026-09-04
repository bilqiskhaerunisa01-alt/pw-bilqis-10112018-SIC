function hitunglaundry() {
    let nama = prompt("Masukkan nama pelanggan");
    let layanan = prompt("Masukkan jenis layanan");
    let berat = parseFloat(
        prompt("Masukkan berat pakaian dalam KG")
    );
    let harga = parseInt(
        prompt("Masukkan harga per KG")
    );
    let biayaTambahan = parseInt(
        prompt("Masukkan biaya tambahan")
    );

    let biayalaundry = berat * harga;
    let totalbayar = biayalaundry + biayaTambahan;

    let tekshasil = 
    "<h2>Rincian Laundry</h2>" + 
    "<p>Nama: <b>" + nama + "</b></p>" +
    "<p>Layanan: " + layanan + "</p>" +
    "<p>Berat: " + berat + "</p>" +
    "<p>Harga per KG: Rp" + harga + "</p>" +
    "<p>Biaya Laundry: Rp" + biayalaundry + "</p>" +
    "<p>Biaya Tambahan: Rp" + biayaTambahan + "</p>" +
    "<hr>" + 
    "<h3>Total: Rp" + totalbayar + "</h3>";

    document.getElementById("hasil").innerHTML = tekshasil;
    
}