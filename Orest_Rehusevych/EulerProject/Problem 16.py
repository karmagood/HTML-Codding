# Power digit sum


def power_digit_sum():
    n = 2 ** 1000
    s = 0
    for i in str(n):
        s += int(i)
    return str(s)

print(power_digit_sum())
