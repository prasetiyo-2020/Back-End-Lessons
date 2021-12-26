# Comparison Operations
- Operasi perbandingan adalah operasi untuk membandingkan dua buah data
- Operasi perbandingan adalah operasi yang menghasilkan nilai boolean (benar atau salah)
- Jika hasil operasinya adalah benar, maka nilainya adalah true
- Jika hasil operasinya adalah salah, maka nilainya adalah false

| Operator  | Keterangan |
| :-------------: | :-------------: |
| > | Lebih dari  |
| < | Kurang dari  |
| >= | Lebih atau sama dengan  |
| <= | Kurang atau sama dengan  |
| == | Sama dengan  |
| != | Tidak sama dengan  |

``` golang
func main() {
	var score1 int8 = 10
	var score2 int8 = 10

	var compare1 bool = score1 == score2
	var compare2 bool = score1 > score2
	var compare3 bool = score1 < score2
	var compare4 bool = score1 >= score2
	var compare5 bool = score1 <= score2
	var compare6 bool = score1 != score2
	fmt.Println(compare1) // true
	fmt.Println(compare2) // false
	fmt.Println(compare3) // false
	fmt.Println(compare4) // true
	fmt.Println(compare5) // true
	fmt.Println(compare6) // false
}
```
