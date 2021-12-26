# Closure
- Closure adalah kemampuan sebuah function berinteraksi dengan data-data disekitarnya dalam scope yang sama
- Gunakan closure dengan bijak saat membuat aplikasi

``` golang
func main() {
	name := "Prasetiyo"
	counter := 0

	// Anonymous function ini bisa mengakses data diatasnya
	increment := func() {
		name = "Diana"
		fmt.Println(name)
		counter++
		fmt.Println(counter)
	}

	increment()
	increment()
}
```
```
$ go run main.go
Diana
1
Diana
2
```
