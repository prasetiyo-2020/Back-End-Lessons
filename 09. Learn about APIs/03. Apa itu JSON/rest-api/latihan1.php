<?php
$mahasiswa = [
    [
        "nim" => 8040170092,
        "nama" => "Prasetiyo",
        "prodi" => "Sistem Informasi"
    ],
    [
        "nim" => 8040170093,
        "nama" => "Diana",
        "prodi" => "Teknik Informatika"
    ],
    [
        "nim" => 8040170094,
        "nama" => "Renata",
        "prodi" => "Sistem Informasi"
    ]
];

// var_dump($mahasiswa);
$data = json_encode($mahasiswa);
echo $data;
