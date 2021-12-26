# Function Value
- Function adalah first class citizen
- Function juga merupakan tipe data, dan bisa disimpan di dalam variabel

## Function Value
``` golang
func main() {
	// getGreeting dijadikan sebuah value untuk variabel greeting
	greeting := getGreeting
	result := greeting("Prasetiyo")
	fmt.Println(result)
	// greeting := getGreeting("Prasetiyo")
}

func getGreeting(name string) string {
	return "Hallo " + name
}
```
