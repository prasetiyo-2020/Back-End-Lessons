package main

import "fmt"

func main() {
	plusMinus([]int32{-4, 3, -9, 0, 4, 1})
}

func plusMinus(arr []int32) {
	// arr = [-4, 3, -9, 0, 4, 1]
	// ratio positive 3/6 = 0.500000
	// ratio negative 2/6 = 0.333333
	// ratio zero 1/6 = 0.166667
	var positiveNumbers int32
	var negativeNumbers int32
	var zeroNumbers int32

	for i := 0; i < len(arr); i++ {
		if arr[i] > 0 {
			positiveNumbers += 1
		} else if arr[i] < 0 {
			negativeNumbers += 1
		} else {
			zeroNumbers += 1
		}
	}

	var positiveRatio float64 = float64(positiveNumbers) / float64(len(arr))
	var negativeRatio float64 = float64(negativeNumbers) / float64(len(arr))
	var zeroRatio float64 = float64(zeroNumbers) / float64(len(arr))

	fmt.Println(positiveRatio)
	fmt.Println(negativeRatio)
	fmt.Println(zeroRatio)
}
