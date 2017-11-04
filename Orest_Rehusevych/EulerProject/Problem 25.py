import itertools


def compute():
    digits = 1000
    prev = 1
    cur = 0
    for i in itertools.count():
        # At this point, prev = fibonacci(i - 1) and cur = fibonacci(i)
        if len(str(cur)) == digits:
            return str(i)

        # Advance the Fibonacci sequence by one step
        prev, cur = cur, prev + cur

print(compute())
