# Factorial digit sum
import math


def factorial_digit_sum(number):
    sum = 0
    factorial = math.factorial(number)
    for i in str(factorial):
        sum += int(i)
    return sum

print(factorial_digit_sum(100))
