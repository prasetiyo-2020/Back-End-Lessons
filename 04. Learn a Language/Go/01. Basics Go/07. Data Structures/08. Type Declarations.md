## Type Declarations
``` golang
package main

import "fmt"

func main() {
	// NIM merupakan alias dari string
	type NIM string
	// NamaMahasiswa merupakan alias dari string
	type NamaMahasiswa string
	// Status merupakan alias dari boolean
	type Status bool

	var nim NIM = "8040170092"
	var nama NamaMahasiswa = "Prasetiyo"
	var status Status = true

	fmt.Println(nim)
	fmt.Println(nama)
	fmt.Println(status)
}
```

```
$ go run main.go
> 8040170092
> Prasetiyo
> true
```
