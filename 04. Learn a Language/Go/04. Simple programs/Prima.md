```golang
func isPrime(n int64) int32 {
	counter := 0
	for i := 2; int64(i) <= n; i++ {
		if n%int64(i) == 0 {
			counter++
		}
	}
	if counter == 1 {
		return 1
	} else {
		return 2
	}
}
```
