# Boolean Operations
## Boolean Operations
| Operator | Keterangan |
| :---: | :---: |
| && | Dan |
| II | Atau |
| ! | Kebalikan |

## AND / &&
| Kondisi 1  | Kondisi 2  | Output  | 
| :---: | :---: | :---: |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

## OR / ||
| Kondisi 1  | Kondisi 2  | Output  | 
| :---: | :---: | :---: |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

## Example

#### true && true = true
```golang
func main() {
	var nilai int8 = 90
	var kehadiran int8 = 80

	var statusNilai bool = nilai > 70         // true
	var statusKehadiran bool = kehadiran > 70 // true

	var lulusMataKuliah bool = statusNilai && statusKehadiran // true

	fmt.Print(lulusMataKuliah)
}
```

#### false && true = false
```golang
func main() {
	var nilai int8 = 60
	var kehadiran int8 = 80

	var statusNilai bool = nilai > 70         // false
	var statusKehadiran bool = kehadiran > 70 // true

	var lulusMataKuliah bool = statusNilai && statusKehadiran // false

	fmt.Print(lulusMataKuliah)
}

```


#### false || true = true
``` golang
func main() {
	var nilai int8 = 60
	var kehadiran int8 = 80

	var statusNilai bool = nilai > 70         // false
	var statusKehadiran bool = kehadiran > 70 // true

	var lulusMataKuliah bool = statusNilai || statusKehadiran // true

	fmt.Print(lulusMataKuliah)
}
```

#### false || false = false
``` golang
func main() {
	var nilai int8 = 60
	var kehadiran int8 = 60

	var statusNilai bool = nilai > 70         // false
	var statusKehadiran bool = kehadiran > 70 // false

	var lulusMataKuliah bool = statusNilai || statusKehadiran // false

	fmt.Print(lulusMataKuliah)
}
```
