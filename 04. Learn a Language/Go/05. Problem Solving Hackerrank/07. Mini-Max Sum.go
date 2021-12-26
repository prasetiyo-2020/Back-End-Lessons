package main

import "fmt"

func main() {
	var arr = []int{7, 69, 2, 221, 8974}

	var min int
	for i := 0; i < len(arr)-1; i++ {
		min = min + arr[i]
	}

	var max int
	for i := 1; i < len(arr); i++ {
		max = max + arr[i]
	}
	fmt.Println(min, max)
}

// func main() {
// 	var arr = []int{1, 3, 5, 7, 9}

// 	var result = []int{0, 0}

// 	var min int
// 	for i := 0; i < len(arr)-1; i++ {
// 		min = min + arr[i]
// 	}
// 	result[0] = result[0] + min

// 	var max int
// 	for i := 1; i < len(arr); i++ {
// 		max = max + arr[i]
// 	}
// 	result[1] = result[1] + max
// 	fmt.Println(result)
// }
