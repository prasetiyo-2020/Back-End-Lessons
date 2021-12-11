# Recursive Function
Recursive function adalah function yang memanggil function dirinya sendiri

``` golang
func main() {
	factorial := factorialRecursive(10)
	fmt.Println(factorial) // 3628800
}

func factorialRecursive(value int) int {
	if value == 1 {
		return 1
	} else {
		return value * factorialRecursive(value-1)
	}
}
```
