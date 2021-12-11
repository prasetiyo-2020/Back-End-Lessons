// 1. Object Literal
let mahasiswa = {
    nama: 'Prasetiyo',
    energy: 10,
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Hallo, ${this.nama}, selamat makan!`);
    }
}

// 2. Function Declaration
function Mahasiswa(nama, energy) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

    return mahasiswa;
}

let prasetiyo = Mahasiswa('Prasetiyo', 10);
let ramdani = Mahasiswa('Doddy', 20);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let prasetiyo = new Mahasiswa('Prasetiyo', 10);