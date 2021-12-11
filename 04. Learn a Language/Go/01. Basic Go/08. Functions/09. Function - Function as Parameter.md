# Function as Parameter
- Function tidak hanya bisa kita simpan di dalam variable sebagai value
- Namun juga bisa kita gunakan sebagai parameter untuk function lain

## Function as Parameter
``` golang
func main() {
	greetingWithFilter("Prasetiyo", badWordFilter) // Hello Prasetiyo
	greetingWithFilter("Anjing", badWordFilter)    // Hello ***
	greetingWithFilter("Babi", badWordFilter)      // Hello ***
}

func greetingWithFilter(name string, filter func(string) string) {
	nameFiltered := filter(name)
	fmt.Println("Hello", nameFiltered)
}

func badWordFilter(name string) string {
	badWords := []string{"Babi", "Anjing", "Monyet"}
	if name == badWords[0] || name == badWords[1] || name == badWords[2] {
		return "***"
	} else {
		return name
	}
}
```

## Membuat alias dengan type declaration pada function
``` golang
type Filter func(string) string

func greetingWithFilter(name string, filter Filter) {
	nameFiltered := filter(name)
	fmt.Println("Hello", nameFiltered)
}
```
