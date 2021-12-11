### Segitiga Siku 1
``` golang
func segitigaSiku1(panjang int) string {
	var hasil string
	for i := 0; i < panjang; i++ {
		for j := 0; j <= i; j++ {
			hasil += "* "
		}
		hasil += "\n"
	}
	return hasil
}
```
```
* 
* *
* * *
* * * *
* * * * *
```

### Segitiga Siku 2
``` golang
func segitigaSiku2(panjang int) string {
	var hasil string
	for i := 0; i < panjang; i++ {
		for j := panjang; j > i; j-- {
			hasil += "* "
		}
		hasil += "\n"
	}
	return hasil
}
```
```
* * * * * 
* * * *
* * *
* *
*
```

### Segitiga Siku 3
``` golang
func segitigaSiku3(panjang int) string {
	var hasil string
	for i := panjang; i > 0; i-- {
		for j := panjang; j > 0; j-- {
			if j > i {
				hasil += "  "
			} else {
				hasil += "* "
			}
		}
		hasil += "\n"
	}
	return hasil
}
```
```
* * * * *
  * * * *
    * * *
      * *
        *
```

### Piramida Terbalik
```golang
func piramida2(panjang int) string {
	var hasil string
	for i := panjang; i > 0; i-- {
		for j := panjang; j > 0; j-- {
			if j > i {
				hasil += " "
			} else {
				hasil += "* "
			}
		}
		hasil += "\n"
	}
	return hasil
}
```
```
* * * * *
 * * * *
  * * *
   * *
    *
```
