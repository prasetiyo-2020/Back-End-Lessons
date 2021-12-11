# Break & Continue
## Break
Break digunakan untuk menghentikan seluruh perulangan.
``` golang
func main() {
	for i := 0; i < 10; i++ {
		fmt.Println("Perulangan ke", i)
		if i == 5 {
			break
		}
	}
}
```
```
$ go run main.go
Perulangan ke 0
Perulangan ke 1
Perulangan ke 2
Perulangan ke 3
Perulangan ke 4
Perulangan ke 5
```


## Continue
Continue digunakan untuk menghentikan perulangan yang berjalan, dan langsung melanjutkan ke perulangan selanjutnya.
```golang
func main() {
	for i := 0; i < 10; i++ {
    // Kalau hasilnya genap maka hentikan, dan lanjutkan ke perulangan selanjutnya
		if i%2 == 0 {
			continue
		}
		fmt.Println(i, "adalah bilangan ganjil")
	}
}
```

```
$ go run main.go
1 adalah bilangan ganjil
3 adalah bilangan ganjil
5 adalah bilangan ganjil
7 adalah bilangan ganjil
9 adalah bilangan ganjil
```
