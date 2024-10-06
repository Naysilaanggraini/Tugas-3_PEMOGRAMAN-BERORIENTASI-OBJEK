// Ini class, baris 3 objek, baris 11 method
class Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitas = kapasitas; // tetap publik
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} ton, memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
  }
}

// Subclass pertama
class YachtTraveling extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, tujuanPelayaran, fasilitas, lamaPerjalanan) {
    super(nama, jenis, kapasitas, panjang, lebar); // jenisnya nanti Luxury Yacht
    this.tujuanPelayaran = tujuanPelayaran; // Raja Ampat
    this.fasilitas = fasilitas; // array ['Kamar Suite Mewah', 'Water Sport Equipment', 'Kolam Renang', 'Restaurant']
    this.lamaPerjalanan = lamaPerjalanan; // 5, pakai ket hari nanti di returnnya
  }

  // Method subclass1
  infoPelayaran() {
    return `Ini adalah paket Traveling Pelayaran dengan tujuan ${this.tujuanPelayaran} yang berlangsung selama ${this.lamaPerjalanan} hari dengan menggunakan yacht ${this.nama} yang merupakan jenis ${this.jenis}, memiliki dimensi ${this.panjang} x ${this.lebar} meter dengan kapasitas ${this.kapasitas} penumpang. Pelayaran ini memiliki fasilitas unggul yang mencakup ${this.fasilitas.join(', ')}.`;
  }
}

// Subclass kedua
class PengirimanJalurLaut extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, muatan, biayaPerTon) {
    super(nama, jenis, kapasitas, panjang, lebar); // jenisnya nanti Kargo Evergreen
    this._muatan = muatan; // Enkapsulasi
    this.biayaPerTon = biayaPerTon; // tetap publik
  }

  // Getter untuk muatan sebagai private data
  get muatan() {
    return this._muatan;
  }

  // Setter untuk muatan
  set muatan(value) {
    if (value > this.kapasitas) {
      console.log(`Muatan melebihi kapasitas kapal! Kapasitas maksimum: ${this.kapasitas} ton.`);
    } else {
      this._muatan = value;
      console.log(`Muatan telah diperbarui menjadi ${this._muatan} ton.`);
    }
  }

  infoPengiriman() {
    return `Pengiriman ini menggunakan ${this.nama} yang merupakan kapal ${this.jenis} dengan kapasitas ${this.kapasitas} ton, memiliki dimensi ${this.panjang} x ${this.lebar} meter. Saat ini kapal sedang mengangkut ${this._muatan} ton barang.`;
  }
}

// Untuk memanggil class dan method
let kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 500, 200, 100);
console.log(kapalPenumpang.infoKapal());

let yacht = new YachtTraveling("Oceanic", "Luxury Yacht", 10, 100, 18, "Raja Ampat", ['Kamar Suite Mewah', 'Water Sport Equipment', 'Kolam Renang', 'Restaurant'], 5);
console.log(yacht.infoPelayaran());

let kapalKargo = new PengirimanJalurLaut("Evergreen", "Kargo", 200000, 400, 50, 300000, 3000000);
console.log(kapalKargo.infoPengiriman());

// Cek muatan yang diperbolehkan
kapalKargo.muatan = 250000; // Mengatur muatan melebihi kapasitas
console.log(kapalKargo.infoPengiriman());

kapalKargo.muatan = 30000; // Mengatur muatan yang sah
console.log(kapalKargo.infoPengiriman());

// Agar hasilnya tampil sekaligus di laman HTML
document.getElementById("objek").innerHTML = `
  <p>${kapalPenumpang.infoKapal()}</p>
  <p>${yacht.infoPelayaran()}</p>
  <p>${kapalKargo.infoPengiriman()}</p>
`;
