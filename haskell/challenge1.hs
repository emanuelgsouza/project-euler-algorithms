-- "If we list all the natural numbers below 10 that are multiples of
-- 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
-- Find the sum of all the multiples of 3 or 5 below 1000."

isDivisible :: Int -> Int -> Bool
isDivisible x y = y `mod` x == 0

isDivisibleToThree :: Int -> Bool
isDivisibleToThree y = isDivisible 3 y

isDivisibleToFive :: Int -> Bool
isDivisibleToFive y = isDivisible 5 y

challenge1 = sum [ x | x <- [ 1..999 ], isDivisibleToThree x || isDivisibleToFive x ]
