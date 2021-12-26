## Fibonacci

``` golang
package main

import "fmt"

func fibonacci(num int) int {
	if num < 2 {
		return num
	} else {
		return fibonacci(num-1) + fibonacci(num-2)
	}
}

func main() {
	var input int
	fmt.Println("Masukkan suku ke - n")
	fmt.Println("--------------------")
	fmt.Scan(&input)
	fmt.Println("--------------------")

	if input <= 0 {
		fmt.Println("Masukan bilangan positif")
	} else {
		for i := 0; i < input; i++ {
			fmt.Println(fibonacci(i))
		}
	}
}
```
```
$ go run main.go
Masukkan suku ke - n
--------------------
10
--------------------
0
1
1
2
3
5
8
13
21
34
```
