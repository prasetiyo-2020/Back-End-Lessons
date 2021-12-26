## Mencari tahu persentase diskon yang kita dapat
``` golang
// Mencari tahu persentase diskon yang kita dapat
func MenentukanBesarDiskon(hargaSebelumDiskon int, hargaSetelahDiskon int) int {
	besarDiskon := hargaSebelumDiskon - hargaSetelahDiskon
	x := besarDiskon * 100 / hargaSebelumDiskon
	return x
}
```

## Mencari tahu Harga Setelah Diskon
``` golang
// Mencari tahu Harga Setelah Diskon
func MenentukanHargaSetelahDiskon(hargaBarang int, diskon int) int {
	hsd := (100 - diskon) * hargaBarang
	hsd /= 100
	return hsd
}
```

## Mencari tahu harga barang sebelum diskon
``` golang
// Mencari tahu harga barang sebelum diskon
func MenentukanHargaSebelumDiskon(diskon int, hargaSetelahDiskon int) int {
	hargaBarang := 100 * hargaSetelahDiskon
	hargaBarang /= 100 - diskon
	return hargaBarang
}
```



