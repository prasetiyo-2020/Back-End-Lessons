// 2. Function Declaration dengan Object.create()

const methodMahasiswa = {
    makan : function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main : function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur : function(jam) {
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
}


function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}

let prasetiyo = Mahasiswa('Prasetiyo', 10);
let ramdani = Mahasiswa('Doddy', 20);