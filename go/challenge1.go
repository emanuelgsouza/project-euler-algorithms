package main

import "fmt"

func isDivisible (divisor int) func (number int) bool {
	return func (number int) bool {
		return number % divisor == 0
	}
}

var multipleByThree = isDivisible(3)

var multipleByFive = isDivisible(5)

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
