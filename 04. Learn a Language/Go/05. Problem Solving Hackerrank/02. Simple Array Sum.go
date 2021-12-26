package main

func aVeryBigSum(ar []int64) int64 {
	var result int64
	for index := 0; index < len(ar); index++ {
		result = result + ar[int64(index)]
	}

	return result
}
