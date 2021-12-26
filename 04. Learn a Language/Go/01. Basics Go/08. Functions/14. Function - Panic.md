# Panic
- Panic function adalah function yang bisa kita gunakan untuk menghentikan program
- Panic function biasanya dipanggil ketika terjadi error pada saat program kita berjalan
- Saat panic function dipanggil, program akan terhenti, namun defer function tetap akan dieksekusi

```golang
func main() {
	runApplication(true)
}

func lastMessage() {
	fmt.Println("Program Berakhir")
}

func runApplication(error bool) {
	defer lastMessage()
	// error == true
	if error {
		panic("Terjadi Kesalahan Pada Program")
	}
	fmt.Println("Aplikasi berjalan dengan baik")
}
```

```
$ go run main.go
Program Berakhir
panic: Terjadi Kesalahan Pada Program

goroutine 1 [running]:
main.runApplication(0x0)
        C:/Users/Asus/Desktop/golangDasar/main.go:16 +0xa5
main.main()
        C:/Users/Asus/Desktop/golangDasar/main.go:6 +0x1e
exit status 2
```
