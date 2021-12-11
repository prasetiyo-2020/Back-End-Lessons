
// Versi Prototype inheritence
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, selamat bermain!`;
}

let prasetiyo = new Mahasiswa('Prasetiyo', 10);

// Versi Class
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    
    main(jam) {
        this.energy -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
    
    tidur(jam) {
        this.energy += jam * 2;
        return `Halo ${this.nama}, selamat bermain!`;
    }
}

let prasetiyo = new Mahasiswa('Prasetiyo', 10);