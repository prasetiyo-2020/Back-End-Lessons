package main

import "fmt"

func main() {
	fmt.Println(segitigaSiku3(5))
}

func segitigaSiku3(panjang int) string {
	var hasil string
	for i := 0; i < panjang; i++ {
		for j := panjang; j > i; j-- {
			if j > i {
				//
				hasil += "  "
			} else {
				hasil += " *"
			}
		}
		hasil += "\n"
	}
	return hasil
}

// 5 > 1
//          *
