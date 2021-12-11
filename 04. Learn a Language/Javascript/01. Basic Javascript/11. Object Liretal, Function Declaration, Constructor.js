// Object Literal
let mhs1 = {
    nama : "Prasetiyo",
    nik : '8040170092',
    email : 'prasetiyo2020@yahoo.com',
    jurusan : 'Sistem Informasi'
}

let mhs2 = {
    nama : "Ramdani",
    nik : '8040170093',
    email : 'ramdani2020@yahoo.com',
    jurusan : 'Teknik Informatika'
}

// Function Declaration
function buatObjectMahasiswa(nama, nik, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nik = nik;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjectMahasiswa('Khoirun Nisa', '8040170094', 'khoirunnisa2020@yahoo.com', 'Sistem Informasi');


// Object dengan Constructor Function (keyword new)
function Mahasiswa(nama, nik, email, jurusan) {
    // let this = {};
    this.nama = nama;
    this.nik = nik;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

let mhs4 = new Mahasiswa('Wahyuni', '8040170095', 'wahyuni2020@yahoo.com', 'Sistem Informasi');

