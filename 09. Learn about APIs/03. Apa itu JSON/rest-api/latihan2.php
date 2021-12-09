<?php

$data = file_get_contents('test.json');
// Buat true agar menjadi array assosiatif
$mahasiswa = json_decode($data, true);

var_dump($mahasiswa);
echo $mahasiswa[0]["pembimbing"]["pembimbing1"];
