-- Membuat Database Penjualan
CREATE DATABASE PENJUALAN;

-- Menggunakan Database Penjualan
USE PENJUALAN;

-- Membuat Tabel Kota
CREATE TABLE kota(
    ID INT NOT NULL,
    nama VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID)
);

-- Menambah Record pada Tabel Kota
INSERT INTO kota(ID, nama) VALUES  (1, 'Jambi');
INSERT INTO kota(ID, nama) VALUES  (2, 'Palembang');
INSERT INTO kota(ID, nama) VALUES  (3, 'Lampung');

-- Membuat Tabel Penjual
CREATE TABLE penjual(
    ID INT NOT NULL,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    ID_kota INT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID_kota) REFERENCES kota(ID)
);

-- Menambah Record pada Tabel Penjual
INSERT INTO penjual(ID, nama, alamat, ID_kota) VALUES  (1, 'Prasetiyo', "Jl. Simpang Dire", 1);
INSERT INTO penjual(ID, nama, alamat, ID_kota) VALUES  (2, 'Diana', "Jl. Simpang Radiant", 2);
INSERT INTO penjual(ID, nama, alamat, ID_kota) VALUES  (3, 'Bunga', "Jl. Simpang Roshan Pit", 3);