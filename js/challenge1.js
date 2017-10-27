/*
Arquivo js para resolução do primeiro desafio do Project Euler
Segue o desafio:
  "If we list all the natural numbers below 10 that are multiples of
  3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000."
*/

const { range, filter } = require('lodash')
const { compose, sum, curry } = require ('ramda')

const isDivisible = curry((divisor, number) => (number % divisor) === 0)

const isDivisibleToThree = isDivisible(3)

const isDivisibleToFive = isDivisible(5)

const numbersToHundred = range(1000)

const getFiveThreeVisible = number => isDivisibleToFive(number) || isDivisibleToThree(number)

const result = sum(filter(numbersToHundred, getFiveThreeVisible))

console.log(result)
