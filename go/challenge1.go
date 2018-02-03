package main

import "fmt"

func multipleByThree (number int) bool {
	return number % 3 == 0
}

func multipleByFive (number int) bool {
	return number % 5 == 0
}

// generate range https://stackoverflow.com/questions/39868029/how-to-generate-a-sequence-of-numbers-in-golang
func makeRange(min, max int) []int {
	a := make([]int, max-min+1)
	for i := range a {
		a[i] = min + i
	}
	return a
}

func main () {
	fmt.Println("Inicializando a brincadeira")
	numbers := makeRange(1, 999)
	total := 0
	for _, number := range numbers {
		if multipleByThree(number) || multipleByFive(number) {
			total += number
		}
	}
	fmt.Println("O total é:", total)
}
