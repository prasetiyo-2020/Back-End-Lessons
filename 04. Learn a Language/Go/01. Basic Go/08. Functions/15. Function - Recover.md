# Recover
- Recover adalah function yang bisa kita gunakan untuk menangkap data panic
- Dengan recover proses panic akan terhenti, sehingga program akan tetap berjalan

``` golang
func main() {
	runApplication(true)
}

func endApplication() {
	message := recover()
	fmt.Println("Pesan Error : ", message)
	fmt.Println("Program Berakhir")
}

func runApplication(error bool) {
	defer endApplication()
	// error == true
	if error {
		panic("Terjadi Kesalahan Pada Program")
	}
	fmt.Println("Aplikasi berjalan dengan baik")
}
```

```
$ go run main.go
Pesan Error :  Terjadi Kesalahan Pada Program
Program Berakhir
```
