# Constant
- Constant adalah variable yang nilainya tidak bisa diubah lagi setelah pertama kali diberi nilai
- Cara pembuatan constant mirip dengan variable yang membedakan hanya kata kunci yang digunakan adalah const, bukan var
- Saat pembuatan constant, kita wajib langsung menginisialisasikan datanya
``` golang
func main() {
	const firstName = "Yosho"
	const lastName string = "Prasetiyo"

	fmt.Println(firstName)
	fmt.Println(lastName)
}
```
```
$ go run main.go
> Yosho
> Prasetiyo
```

## Deklarasi Multiple Variable menggunakan Const
``` golang
func main() {
	const (
		firstName = "Yosho"
		lastName  = "Prasetiyo"
	)

	fmt.Println(firstName) // Yosho
	fmt.Println(lastName)  // Prasetiyo
}
```

## Ketika mengubah isi dari tipe variabel const
``` golang
func main() {
	const firstName = "Yosho"
	const lastName string = "Prasetiyo"

	// Jika mengubah isi dari tipe variabel const
	firstName = "Diana"
	lastName = "Putri"

	fmt.Println(firstName)
	fmt.Println(lastName)
}
```

```
$ go run main.go
# command-line-arguments
.\main.go:10:12: cannot assign to firstName (declared const)
.\main.go:11:11: cannot assign to lastName (declared const)
```
