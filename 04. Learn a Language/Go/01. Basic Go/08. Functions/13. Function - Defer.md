
# Defer
- Defer function adalah function yang bisa kita jadwalkan untuk dieksekusi setelah sebuah function selesai di eksekusi
- Defer function akan selalu dieksekusi walaupun terjadi error di function yang dieksekusi

``` golang
func main() {
	runApplication(0)
}

func logging() {
	fmt.Println("Log success")
}

func runApplication(value int) {
	// defer logging() tetap dijalankan setelah blok kode runApplication selesai dijalankan
	defer logging()
	fmt.Println("Run Application")
	result := 10 / value
	fmt.Println(result)
}

```
```
$ go run main.go
Run Application
Log success
panic: runtime error: integer divide by zero

goroutine 1 [running]:
main.runApplication(0x0)
        C:/Users/Asus/Desktop/golangDasar/main.go:16 +0xf6
main.main()
        C:/Users/Asus/Desktop/golangDasar/main.go:6 +0x1b
exit status 2
```
