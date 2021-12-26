``` golang
func main() {
	kuadranApa1 := trigonomotri(3, 3)
	kuadranApa2 := trigonomotri(-3, 3)
	kuadranApa3 := trigonomotri(-3, -3)
	kuadranApa4 := trigonomotri(3, -2)
	fmt.Println(kuadranApa1) // Kuadran 1
	fmt.Println(kuadranApa2) // Kuadran 2
	fmt.Println(kuadranApa3) // Kuadran 3
	fmt.Println(kuadranApa4) // Kuadran 4
}

func trigonomotri(x int, y int) string {
	if x >= 0 && y >= 0 {
		return "Kuadran 1"
	} else if x < 0 && y >= 0 {
		return "Kuadran 2"
	} else if x < 0 && y < 0 {
		return "Kuadran 3"
	} else {
		return "Kuadran 4"
	}
}
```
