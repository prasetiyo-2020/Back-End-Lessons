# Pembalik Kata
## Pembalik Kata
``` golang
func main() {
	nama := "Prasetiyo"
	panjangNama := len(nama)

	for i := panjangNama - 1; i >= 0; i-- {
		fmt.Print(string(nama[i])) // oyitesarP
	}
}
```
