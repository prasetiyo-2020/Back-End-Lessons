#### Q1. Fanny dan Alexander terpisah sejauh 360 mil dan bergerak saling mendekat dalam satu garis lurus, masing-masing dengan laju tetap 25 mil/jam dan 65 mil/jam. Seberapa jauh tepatnya posisi mereka terpisah 1,5 jam sebelum bertemu?
- [ ] 65 mil
- [ ] 70 mil
- [ ] 25 mil
- [ ] 90 mil
- [x] 135 mil

``` javascript
const jarakSebelumBertemu = function (lajuA, lajuB, waktuSebelumBertemu) {
    let lajuAB = lajuA + lajuB;
    return lajuAB * waktuSebelumBertemu;
}

console.log("Jarak sebelum Fanny dan Alex bertemu adalah " + jarakSebelumBertemu(25, 65, 1.5) + " mil");
// Output: Jarak sebelum Fanny dan Alex bertemu adalah 135 mil
```

https://www.quora.com/Fanny-and-Alexander-are-360-miles-apart-and-are-traveling-in-a-straight-line-toward-each-other-at-a-constant-rate-of-25-mph-and-65-mph-respectively-how-far-apart-will-they-be-exactly-1-5-hours-before-they-meet

#### Q2. Di sebuah provinsi, 70% kabupaten mengalami cuaca hujan pada hari Senin, dan 65% mengalami cuaca hujan pada hari Selasa. 25% Kabupaten tidak mengalami hujan pada kedua hari tersebut. Berapa % kabupaten yang mengalami cuaca hujan pada kedua hari nya (Senin dan Selasa)?
- [ ] 67.5%
- [ ] 40%
- [x] 60%
- [ ] 15.5%
- [ ] 50%

``` javascript
const persentaseKabupatenHujanDiSeninDanSelasa = function (persentaseKabupatenHari1, persentaseKabupatenHari2, persentaseHari1DanHari2) {
    return (persentaseKabupatenHari1 + persentaseKabupatenHari2) - persentaseHari1DanHari2;
}

console.log(persentaseKabupatenHujanDiSeninDanSelasa(70, 65, 75) + "%");
// Output: 60%
```

https://brainly.co.id/tugas/22846622

#### Q3. Sebuah pipa pengurasan dapat mengosongkan sebuah kolam dalam 4 jam. Pada musim hujan, ketika kolam penuh, pipa tersebut dibuka dan kolam dikuras dalam 6 jam. Jika curah hujan ke kolam sebanyak 3 liter per jam, berapa kapasitas kolam?
- [ ] 45 liter
- [ ] 27 liter
- [ ] 9 liter
- [x] 36 liter
- [ ] 18 liter

https://gmatclub.com/forum/m05-183682.html

#### Q4. Daging cincang sapi seberat 2 kg dijual seharga “x” rupiah/kg, dan daging cincang kambing seberat 5 kg dijual “y” rupiah/kg. Berapa harga jual daging cincang per kilogram jika keduanya daging tersebut dicampur?
- [ ] (2x + 5y) / xy
- [x] (2x + 5y) / 7
- [ ] 2x + 5y
- [ ] x + y
- [ ] 5 (2x + 5y)

``` javascript 
const hargaJualDagingCincangPerKilogram = function (kgSapi, kgKambing) {
    let sapi = kgSapi + 'x';
    let kambing = kgKambing + 'y';
    let sapiKambing = kgSapi + kgKambing;

    return `(${sapi} + ${kambing})` +  " / " + sapiKambing;
}

console.log(hargaJualDagingCincangPerKilogram(2, 5));
// Output : (2x + 5y) / 7
```

https://brainly.co.id/tugas/22846824

#### Q5. Murid SMU Alpha akan bertamasya ke Bali. Jika 70% dari seluruh murid wanita dan 90% dari seluruh murid pria telah mendaftar untuk ikut tamasya, sedangkan 60% dari keseluruhan murid SMU Alpha adalah murid perempuan. Berapakah total % murid (perempuan dan laki-laki) yang akan berangkat tamasya ke Bali?
- [ ] 82%
- [ ] 80%
- [ ] 76%
- [x] 78%
- [ ] 72%

``` javascript
const prosentaseMuridYangIkutTamasya = function (totalMurid, muridPerempuan, muridPria, tamasyaMuridPerempuan, tamasyaMuridPria) {
    let mPerempuan = totalMurid * muridPerempuan;
    let mPria = totalMurid * muridPria;

    let tPerempuan = tamasyaMuridPerempuan * mPerempuan;
    let tPria = tamasyaMuridPria * mPria;

    let totalPeserta = tPerempuan + tPria;

    return totalPeserta / totalMurid * 1;
}

console.log(prosentaseMuridYangIkutTamasya(100, 60, 40, 0.7, 0.9) + '%');
// Output : 78%
```

https://brainly.co.id/tugas/20879947

#### Q6. Andre telah menabung 3/7 dari harga sebuah mobil baru, dan dia telah menghitung jika dia akan bisa menabung 2/5 dari sisanya sebelum akhir musim panas. Berapakah pecahan dari biaya mobil baru yang masih harus ditabung oleh Andre setelah musim panas?
- [ ] 6 / 35
- [ ] 23 / 35
- [ ] 8 / 35
- [x] 29 / 35
- [ ] 12 / 35

``` javascript
const kekuranganPecahanBiayaMobil = function (pembilangA, penyebutA, pembilangB, penyebutB) {
    
    let step3 = pembilangA * penyebutB;
    let step1 = penyebutA * penyebutB;
    let step4 = pembilangB * penyebutA;

    let hasilPembilang = step3 + step4;
    let hasilPenyebut = step1;

    return hasilPembilang + " / " + hasilPenyebut;
}

console.log("Kekurangan Pecahan Biaya Mobil adalah " + kekuranganPecahanBiayaMobil(3, 7, 2, 5));
// Output: Kekurangan Pecahan Biaya Mobil adalah 29 / 35
``` 

#### Q7. { 3, 5, 9, 13, y } Jika rata-rata (rata-rata aritmetik) dan nilai tengah (median) dari deret angka diatas adalah sama, maka berapakah nilai y?
- [ ] 17
- [x] 15
- [ ] 10
- [ ] 8
- [ ] 7

https://brainly.co.id/tugas/27247366

#### Q8. Di sebuah kompleks apartemen Z, 30 persen penghuninya adalah pria dengan umur di atas 18 tahun, dan 40 persen adalah wanita dengan umur di atas 18 tahun. Jika disana terdapat 24 anak yang tinggal di komplek tersebut, berapakah jumlah total dari penghuni kompleks apartemen Z?
- [ ] 112
- [ ] 94
- [ ] 32
- [x] 80
- [ ] 124

``` javascript
const jumlahPenghuniKomplek = function (prosentaseWanitaDewasa, prosentasePriaDewasa, totalAnakAnak) {
  let prosentasiAnakAnak = (100 - prosentaseWanitaDewasa) - prosentasePriaDewasa;
  return (totalAnakAnak * 100) / prosentasiAnakAnak;
}

console.log(jumlahPenghuniKomplek(30, 40, 24));
// Output: 80
```

https://brainly.co.id/tugas/20857887

#### Q9. Metropolis Corporation mempunyai 4 orang pemegang saham: Fritz, Luis, Alfred, dan Werner. Saham yang dimiliki Fritz adalah 2/3 dari jumlah saham ketiga temannya. Saham Luis 3/7 dari jumlah saham ketiga temannya, sedangkan saham Alfred 4/11 dari jumlah saham ketiga temannya. Jika dividen 3.600.000 dolar dibagi keempat pemegang saham, berapakah bagian yang diterima Werner?
- [ ] 100.000 dolar
- [ ] 180.000 dolar
- [ ] 60.000 dolar
- [x] 120.000 dolar
- [ ] 90.000 dolar

https://brainly.com/question/13858080

#### Q10. Empat orang anak mengumpulkan 33 butir permen yang jatuh dari sebuah piñata. Jika 3 di antaranya mendapatkan jumlah permen yang sama dan anak keempat mendapatkan 3 permen lebih sedikit dari masing-masing temannya, berapa butir permen yang diperoleh anak keempat tersebut?
- [x] 6
- [ ] 4
- [ ] 3
- [ ] 7
- [ ] 5

#### Q11. Sebuah toko menjual paket soda isi 6 dengan harga 2.7 dolar. Jika harga ini merupakan harga diskon sebesar 10% dari harga per kaleng soda, lalu berapakah harga satu kaleng soda?
- [ ] 0.35 dolar
- [ ] 0.4 dolar
- [x] 0.5 dolar
- [ ] 0.55 dolar
- [ ] 0.45 dolar

``` javascript
const hargaSetelahDiskonPerKaleng = function (hargaBarangSetelahDiskon, persentaseDiskon, jumlahPaketSoda) {
    let x =  (100 * hargaBarangSetelahDiskon) / (100 - persentaseDiskon);
    return x / jumlahPaketSoda;
}
console.log("Harga Sebelum Diskon per Kaleng " + hargaSetelahDiskonPerKaleng(2.7, 10, 6) + " dolar");
// Output : Harga Sebelum Diskon per Kaleng 0.5 dolar
```

#### Q12. Rani mengendarai sepedanya dengan kecepatan 20 km dalam m menit. Jika dia mengendarai sejauh x km dalam waktu 10 menit dengan kecepatan yang sama, berapakah nilai x?
- [ ] m / 200
- [x] 200 / m
- [ ] m / 20
- [ ] 2m
- [ ] m / 2

https://gmatclub.com/forum/renee-rides-her-bicycle-20-miles-in-m-minutes-if-she-can-ride-x-miles-235627.html

#### Q13. Sebuah restaurant seafood mendapatkan kiriman seafood setiap hari dalam satu minggu. Perusahaan pengiriman mengenakan biaya d dollar untuk setiap pengiriman, dan c sen untuk setiap barang yang dikirim. Jika restaurant memiliki rata-rata x jumlah barang yang dikirim setiap harinya, manakah dari persamaan di bawah ini yang mencerminkan total biaya (dalam dollar) untuk 1 minggu pengiriman?
- [ ] d (7cx / 100)
- [x] 7d + (7xc / 100)
- [ ] 7cdx
- [ ] 7cdx / 100
- [ ] 7d + (xc / 100)

https://gmatclub.com/forum/sarah-s-seafood-restaurant-gets-a-delivery-of-fresh-seafood-every-day-89970.html

#### Q14. Sebuah pom bensin memberi diskon harga per liter untuk semua bensin yang dibeli setelah pembelian 10 liter pertama sebanyak 10 persen. Berapa persen perbandingan total diskon per liter yang dapat untuk pembelian 25 liter dibanding dengan diskon per liter untuk pembelian 20 liter?
- [ ] 80%
- [ ] 100%
- [ ] 140%
- [x] 120%
- [ ] 116.7%

https://gmatclub.com/forum/during-a-special-promotion-a-certain-filling-station-is-offering-a-193517.html

#### Q15. Badan Pengembangan Ekonomi sebuah kota beranggotakan 21 orang. Apabila jumlah wanita di badan pengembangan tersebut 3 orang lebih sedikit daripada 3 kali jumlah anggota pria di dewan tersebut, berapakah jumlah anggota pria?
- [ ] 5
- [ ] 9
- [ ] 7
- [ ] 15
- [x] 6

https://gmatclub.com/forum/a-certain-town-s-economic-development-council-has-21-members-if-the-n-235326.html

#### Q16. Richard 6 tahun lebih tua dari David, dan David 8 tahun lebih tua dari Scott. Dalam 8 tahun, Richard akan 2 kali lebih tua dari Scott, maka berapakah umur David 4 tahun yang lalu?
- [ ] 8
- [ ] 14
- [ ] 12
- [ ] 16
- [x] 10

https://gmatclub.com/forum/a-certain-family-has-3-sons-richard-is-6-years-older-than-david-and-193308.html

#### Q17. Di negara Z, rasio penduduk di bawah 25 tahun dan 25 tahun ke atas adalah 3:2. Jika terdapat 36 juta orang berusia di bawah 25 tahun, berapa juta jumlah penduduk negara tersebut?
- [ ] 12
- [ ] 24
- [ ] 48
- [ ] 36
- [x] 60

https://gmatclub.com/forum/in-country-z-the-ratio-of-residents-under-25-years-of-age-to-resident-282210.html

#### Q18. Seorang guru mengajar muridnya dengan menggunakan 10 kartu yang diberi nomor 1 sampai 10, Dia meminta murid-muridnya untuk memilih 4 kartu tersebut secara acak, kemudian meminta mereka untuk mengurutkan kartu dari terkecil hingga terbesar. Suatu hari guru tersebut memisahkan kartu nomor 2 dan nomor 4, berapakah banyak kombinasi kartu yang menghasilkan urutan terkecil hingga terbesar secara benar?
- [ ] 336
- [x] 70
- [ ] 210
- [ ] 1680
- [ ] 840

https://www.beatthegmat.com/permutation-with-flash-cards-t11521.html

#### Q19. Jumlah pesawat yang berangkat dari sebuah bandara meningkat dua kali lipat setiap satu jam pada pukul 09.00 – 12.00; setelah pukul 12.00, jumlah pesawat yang berangkat meningkat dua kali lipat setiap dua jam. Apabila 4 buah pesawat berangkat dari bandara diantara pukul 9.00 – 10.00, berapa pesawat yang berangkat meninggalkan bandara pada pukul 14.00 - 16.00?
- [ ] 48
- [ ] 256
- [ ] 32
- [ ] 128
- [x] 64

https://gmatclub.com/forum/the-number-of-flights-leaving-a-certain-airport-doubles-during-every-o-234793.html

#### Q2. Louise 3 kali lebih tua daripada Mary. Lima tahun ke depan, usia Louise 2 kali lebih tua daripada Mary. Berapa umur Mary sekarang?
- [ ] 10
- [x] 6
- [ ] 15
- [ ] 4
- [ ] 5

https://gmatclub.com/forum/louise-is-three-times-as-old-as-mary-mary-is-twice-as-old-as-natalie-273751.html

#### Q21. Jika sisa dari pembagian antara bilangan x dengan 5 adalah 2. Maka semua persamaan ini mungkin adalah bilangan bulat, KECUALI?
- [ ] x / 10
- [ ] x / 3 
- [x] x / 11
- [ ] x / 17
- [ ] x / 6

``` golang
func main() {
	fmt.Println("Sisa bagi dari x / 5 = ", 12%5)
	fmt.Println("Sisa bagi dari x / 10 = ", 12%10)
	fmt.Println("Sisa bagi dari x / 3 = ", 12%3)
	fmt.Println("Sisa bagi dari x / 11 = ", 12%11) // Hasil bukan genap.
	fmt.Println("Sisa bagi dari x / 17 = ", 12%17)
	fmt.Println("Sisa bagi dari x / 6 = ", 12%6)
}
```
```
$ go run .
> Sisa bagi dari x / 5 =  2
> Sisa bagi dari x / 10 =  2
> Sisa bagi dari x / 3 =  0
> Sisa bagi dari x / 11 =  1
> Sisa bagi dari x / 17 =  12
> Sisa bagi dari x / 6 =  0
```

#### Q22. Jika y adalah bilangan bulat ganjil, manakah dari persamaan berikut yang akan menghasilkan bilangan bulat genap?
- [ ] y + 2
- [ ] 2y - 1
- [ ] 3y + 1
- [ ] y + 6
- [x] 3y

https://gmatclub.com/forum/if-y-is-an-odd-integer-which-of-the-following-must-be-an-even-integer-307679.html

#### Q23. Steven sudah berlari beberapa putaran di sebuah trek dalam rata-rata waktu per putaran selama 51 detik. Apabila dia berlari satu putaran lagi dalam 39 detik dan mengurangi rata-rata waktu per putaran nya menjadi 49 detik, berapa banyak putaran yang dilakukan dalam rata-rata waktu 51 detik per putaran nya?
- [x] 5
- [ ] 2
- [ ] 12
- [ ] 10
- [ ] 6

https://gmatclub.com/forum/steven-has-run-a-certain-number-of-laps-around-a-track-at-an-average-288709.html

#### Q24. Grand Livina lebih boros bensin 40% daripada Xpander. Jika Yaris lebih boros bensin 15% daripada Grand Livina, maka seberapa lebih boroskah Yaris dibandingkan Xpander?
- [ ] 25%
- [x] 55%
- [ ] 46%
- [ ] 66%
- [ ] 61%

https://brainly.co.id/tugas/43253228

#### Q25. Seorang kontraktor memperkirakan kru-nya yang terdiri dari 10 orang dapat menyelesaikan pekerjaan konstruksi dalam 110 hari jika tidak turun hujan. (Asumsikan kru tidak bekerja pada hari hujan dan hujan adalah satu-satunya hambatan bagi mereka untuk bekerja). Tetapi, pada hari ke-61, setelah 5 hari turun hujan, kontraktor mempekerjakan 6 orang tambahan dan menyelesaikan proyek lebih cepat. Jika pekerjaan selesai dalam 100 hari, selama berapa hari hujan turun setelah hari ke-60?
- [ ] 8
- [ ] 4
- [x] 5
- [ ] 7
- [ ] 6

https://gmatclub.com/forum/a-contractor-estimated-that-his-10-men-crew-m07q06-75694.html

#### Q26. Jika sebuah truk melaju 7 km dalam waktu 1 jam 10 menit, berapakah kecepatannya dalam km per jam?
- [ ] 8
- [x] 6
- [ ] 6.5
- [ ] 8.5
- [ ] 10

https://brainly.co.id/tugas/20705990

#### Q27. Dalam pembuatan kata sandi (password) yang terdiri dari 4 karakter, harus memenuhi kriteria berikut: 1 huruf alfabet, 3 digit angka yang berbeda (0 - 9). Jika huruf berada dalam urutan kedua atau ketiga dari kata sandi tersebut, berapa banyak kemungkinan kombinasi kata sandi yang dapat dibuat?
- [ ] 26.000
- [ ] 18.720
- [ ] 52.000
- [x] 37.440
- [ ] 5.040

https://gmatclub.com/forum/a-four-character-password-consists-of-one-letter-of-the-alphabet-194059.html

#### Q28. Gunther, seorang pengantar pizza, berangkat dari restoran menuju 3 kawasan permukiman yakni Hufflepuff, Ravenclaw, dan Slytherin. Ia berangkat pada pukul 18.30 dari restoran dengan laju 15 mil/jam. Lima belas (15) menit kemudian ia tiba di Hufflepuff, dan ia mengantarkan pizza ke seluruh kawasan Hufflepuff selama 15 menit. Dengan laju yang sama ia beralih ke Ravenclaw, dengan waktu tempuh 15 menit, dan selama 15 menit mengantarkan pizza ke seluruh Ravenclaw. Terakhir, ia bergerak ke Slytherin dengan laju 2 kali laju sebelumnya, dan setiba di sana setelah 15 menit, rupanya pesanan dibatalkan. Berapa laju rata-rata Gunther dari ketiga pengantaran tersebut? (perhitungkan waktu pengantaran)
- [ ] 10 mil / jam
- [ ] 30 mil / jam
- [x] 12 mil / jam
- [ ] 8 mil / jam
- [ ] 15 mil / jam

https://gmatclub.com/forum/gunther-the-pizza-delivery-boy-went-out-from-the-store-carrying-pizz-265219.html

#### Q29. 14 adalah berapa persen dari 112?
- [x] 12.5%
- [ ] 125%
- [ ] 800%
- [ ] 8%
- [ ] 0.125%

https://gmatclub.com/forum/what-percent-of-112-is-234770.html

#### Q30. Diketahui a dan b adalah bilangan bulat yang lebih dari 0. Jika 0.35a = 0.2b, maka nilai b adalah?
- [ ] 0.7a
- [ ] 1.75a
- [ ] 0.57a
- [ ] 0.07a
- [ ] 17.5a

#### Q31. Deni menginvestasikan uangnya melalui rekening deposito sebesar 5.000 dolar di bank dan mendapat bunga majemuk (bunga berbunga) sebesar 8% setiap 6 bulan. Hitung perbedaan bunga yang didapatkan jika Deni menginvestasikan uang nya dalam deposito yang memberikan bunga tunggal sebesar 8% per tahun.
- [ ] 4 dolar
- [ ] 16 dolar
- [ ] 12 dolar
- [ ] 8 dolar
- [ ] 432 dolar

#### Q32. Sebuah toko membeli 1000 kaos, seharga total Rp.90.000.000. Dalam bulan pertama, kaos tersebut dijual dengan harga 80% diatas harga beli, lalu bulan berikutnya menjadi 20% diatas harga beli. Toko tersebut menjual 75% stok kaos nya pada bulan pertama dan 50% dari stok kaos nya pada bulan berikut nya. Berapa besar pendapatan kotor toko tersebut?
- [ ] Rp.100.000.000
- [ ] Rp.121.500.000
- [x] Rp.135.000.000
- [ ] Rp.108.000.000
- [ ] Rp.162.000.000

#### Q33. Di antara para pelamar yang melalui serangkaian tes, 15 orang melamar ke kampus X sekaligus Y. Jika 20% pelamar yang melamar kampus X dan 25% pelamar yang melamar kampus Y melamar kedua kampus sekaligus, berapa pelamar yang hanya melamar kampus X atau kampus Y?
- [x] 105
- [ ] 90
- [ ] 120
- [ ] 115
- [ ] 135

https://gmatclub.com/forum/of-the-applicants-passes-a-certain-test-15-applied-to-both-college-x-262891.html

#### Q34. Sam dan Jessica diundang ke sebuah pesta dansa. Jika disana terdapat 7 pria dan 7 wanita secara keseluruhan, satu wanita serta satu pria akan terpilih untuk memimpin dansa tersebut. Berapakah probabilitasnya Sam dan Jessica TIDAK akan terpilih sebagai pasangan yang memimpin dansa tersebut?
- [x] 48 / 49
- [ ] 47 / 49
- [ ] 1 / 49
- [ ] 6 / 7
- [ ] 1 / 7

https://gmatclub.com/forum/sam-and-jessica-are-invited-to-a-dance-if-there-are-7-men-and-7-women-91574.html

#### Q35. Pada hari senin, sebuah tempat penampungan hewan menerima 55 ekor anjing dan kucing, pada hari Jumat, sebanyak 1/5 kucing dan 1/4 anjing telah teradopsi. Jika tidak ada lagi kucing dan anjing yang diterima setelahnya, maka berapa nilai terbesar yang mungkin untuk jumlah hewan yang diadopsi dari hari Senin-Jumat?
- [ ] 11
- [ ] 12
- [ ] 20
- [x] 13
- [ ] 14

https://gmatclub.com/forum/on-monday-a-certain-animal-shelter-housed-55-cats-and-dogs-42292.html

#### Q36. Tina mendapatkan pinjaman tanpa bunga dari temannya senilai Rp. 2.400.000 dengan skema pembayaran dicicil setiap bulan. Jika 2 ½ % dari hutang tersebut dapat dilunasi dalam waktu 6 bulan, maka berapa bulan yang diperlukan untuk melunasi Rp. 210.000?
- [ ] 24
- [ ] 7
- [ ] 21
- [ ] 6
- [ ] 18

#### Q37. Ann dan Bea berangkat dari Townville pada waktu yang sama dan menuju ke Villageton, yang berjarak 2.000 km. Laju keduanya tetap, dengan laju Ann empat kali laju Bea. Mendekati Villageton, Ann segera berbalik dan menuju Townville hingga bertemu Bea. Saat mereka bertemu, berapa jarak yang sudah ditempuh Bea?
- [x] 4.000 / 5
- [ ] 1.000 / 4
- [ ] 3.000 / 4
- [ ] 1.000 / 5
- [ ] 2.000 / 3

https://gmatclub.com/forum/ann-and-bea-leave-townville-at-the-same-time-and-travel-237882.html

#### Q38. Bagaimana peluang terambilnya bilangan bulat positif tiga angka pada pengambilan acak dengan satu atau lebih angka 7?
- [ ] 27 / 100
- [ ] 1 / 10
- [x] 7 / 25
- [ ] 271 / 900
- [ ] 1 / 9

https://gmatclub.com/forum/what-is-the-probability-that-a-3-digit-positive-integer-picked-at-rand-88572.html

#### Q39. { 1, 4, 6, y }. Jika rata-rata (rata-rata aritmetik) dari deret angka diatas adalah 6, maka berapakah nilai tengah (median) nya?
- [x] 5
- [ ] 13
- [ ] 7
- [ ] 24
- [ ] 6

https://gmatclub.com/forum/if-the-average-arithmetic-mean-of-the-set-of-numbers-above-is-6-the-356742.html

#### Q40. Sebuah toko rental DVD hanya menyewakan film komedi, drama dan action. Dalam suatu periode, diketahui 70% dari film yang disewakan adalah film komedi dan film drama disewa 5 kali lipat lebih banyak dibanding film action.
Jika film action disewa sebanyak A, maka berapa banyak film komedi yang disewakan?
- [ ] A / 14
- [ ] 35A
- [ ] 5A / 7
- [x] 14A
- [ ] 7A / 5

https://gmatclub.com/forum/during-a-certain-two-week-period-70-percent-of-the-movies-rented-from-193521.html

#### Q41. Sebuah bus dari kota M bergerak ke kota N dengan laju tetap, sementara bus lain melakukan perjalanan yang sama ke arah berlawanan dengan laju tetap yang sama dengan bus pertama. Mereka bertemu di titik P setelah berkendara 2 jam. Hari berikutnya kedua bus kembali ke kota asalnya dengan laju tetap yang sama. Salah satu bus mengalami kelambatan 24 menit dan yang lain melaju 36 menit lebih awal. Jika mereka bertemu pada 24 mil dari titik P, berapa jarak kedua kota?
- [ ] 48
- [ ] 72
- [ ] 96
- [ ] 120
- [x] 192

https://gmatclub.com/forum/a-bus-from-city-m-is-traveling-to-city-n-at-a-constant-speed-while-ano-86478.html

#### Q42.
![Screenshot (439)](https://user-images.githubusercontent.com/84963363/139453459-969bdc3b-a78f-45df-92b0-84ac3cbf81b3.png)
berapakah nilai dari z ?
- [x] 9
- [ ] -9
- [ ] 3
- [ ] -3
- [ ] 6

https://gmatclub.com/forum/if-z-2-6z-9-z-2-9-2-what-is-the-value-of-z-204825.html

#### Q43. Di restoran Bests, harga dua hamburger dan lima porsi kentang goreng sama dengan harga empat hamburger dan dua porsi kentang goreng. Jika satu porsi kentang goreng seharga 1,5 dolar, berapa harga dua hamburger?
- [ ] 5,00 dolar
- [x] 4,50 dolar
- [ ] 3,00 dolar
- [ ] 2,25 dolar
- [ ] 6,00 dolar

https://gmatclub.com/forum/at-best-burgers-restaurant-two-hamburgers-and-five-bags-of-french-fri-282244.html

#### Q44. Sebuah dadu dikocok sebanyak 3 kali. Berapa jumlah kemungkinan sisi angka 6 TIDAK muncul sekalipun dalam ketiga kocokan tersebut?
- [ ] 1 / 6
- [x] 215 / 216
- [ ] 1 / 126
- [ ] 2 / 3
- [ ] 17/18

#### Q45. X = {9, 10, 11, 12}
Y = {2, 3, 4, 5}
Jika sebuah angka dipilih secara acak dari masing-masing kelompok angka dan angka dari kelompok X dibagi dengan angka dari kelompok Y, berapakah probabilitasnya bahwa hasilnya adalah sebuah angka bulat?
- [x] 3 / 8
- [ ] 1 / 6
- [ ] 1 / 2
- [ ] 15 / 16
- [ ] 3 / 4

https://gmatclub.com/forum/one-number-will-be-chosen-randomly-from-each-of-the-sets-above-if-x-193287.html

#### Q46. Brando membuat sup dengan dua jenis biji-bijian. Ia mencampur 2 pon biji kedelai hitam seharga 1,35 dolar per pon dengan 3 pon biji miju-miju seharga 1,75 dolar per pon. Berapa harga per pon kacang campur?
- [x] 1,59 dolar
- [ ] 1,40 dolar
- [ ] 1,55 dolar
- [ ] 1,51 dolar
- [ ] 1,70 dolar

https://gmatclub.com/forum/brando-is-making-soup-using-two-types-of-beans-he-mixes-2-pounds-of-282231.html

#### Q47. Jasmine mengemudi sejauh 150 mil pertama dari perjalanannya dengan laju rata-rata 50 mil/jam. Jika ia menempuh sisa perjalanan 80 mil dengan laju rata-rata 40 mil/jam, berapa laju rata-rata seluruh perjalanannya?
- [x] 46
- [ ] 47
- [ ] 44
- [ ] 48
- [ ] 45

https://gmatclub.com/forum/jasmine-drives-the-first-150-miles-of-her-trip-at-an-average-speed-of-282225.html

#### Q48. Tiga orang pengacara masing-masing berpenghasilan rata-rata 300 dolar per jam. Berapa total jumlah penghasilan mereka setelah masing-masing bekerja selama 4 jam?
- [ ] 2800 dolar
- [x] 3600 dolar
- [ ] 1200 dolar
- [ ] 4800 dolar
- [ ] 900 dolar

https://edurev.in/studytube/Solved-Examples-Word-Problems/84128530-311f-4401-b620-3a868e7f819a_t

#### Q49. Selama k hari yang lalu, rata-rata kue mangkuk (rata-rata aljabar) per hari yang dibuat Liv adalah 55. Hari ini Bibi bergabung dengan Liv dan mereka membuat 100 kue, yang menghasilkan rata-rata 60 kue per hari. Berapa nilai k?
- [ ] 6
- [ ] 9
- [ ] 12
- [ ] 10
- [x] 8

https://gmatclub.com/forum/m02-183552.html

#### Q50. Di SMU Alpha terdapat 2 ekstrakurikuler yaitu program musik dan melukis. Rasio perbandingan antara siswa yang ikut setidaknya 1 dari program tersebut dan siswa yang tidak mengikuti keduanya adalah 3:8. Jika SMU Alpha memiliki 220 siswa, berapa siswa yang TIDAK mengikuti kedua program tersebut?
- [ ] 180
- [ ] 40
- [ ] 60
- [ ] 100
- [ ] 160

#### Q51.
![16aee3a8f304c32b6b46547339786b8b](https://user-images.githubusercontent.com/84963363/140060101-5ba9920d-f755-4120-8444-37dc22206405.png)
- [ ] 9 / 64
- [ ] 121 / 64
- [ ] 64 / 121
- [ ] 64 / 9
- [ ] 3 / 8
