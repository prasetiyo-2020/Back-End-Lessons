## Game Pencocok Kode

```golang
func main() {
	totalNilai := gamePencocokKode(1, "kmzway87aa")
	totalNilai += gamePencocokKode(2, "wajsuawe21")
	totalNilai += gamePencocokKode(3, "8w7ahshdsa")
	totalNilai += gamePencocokKode(4, "sia9w8ausd")
	totalNilai += gamePencocokKode(5, "291isjahzs")
	fmt.Println(totalNilai)
}

func gamePencocokKode(nomorSoal int, soal string) int {
	fmt.Println("Soal nomor ", nomorSoal)
	fmt.Println("Ketikan kode berikut tanpa copy/paste", soal)

	var input string
	fmt.Scan(&input)

	if input == soal {
		fmt.Println("Jawaban Anda", input)
		// Jawaban benar bernilai 20
		return 20
	} else {
		fmt.Println("Jawaban Anda", input)
		// Jawaban salah bernilai -10
		return -10
	}
}
```
