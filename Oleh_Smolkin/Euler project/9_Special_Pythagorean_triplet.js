// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const findPythagoreanTriplet = (number) => {
    for (let aLength = 1; aLength < number; aLength++) {
        for (let bLength = aLength + 1; bLength < number; bLength++) {
            let cLength = number - aLength - bLength;
            if (cLength < bLength)
                break;

            if (aLength * aLength + bLength * bLength == cLength * cLength)
                return aLength * bLength * cLength;
        }
    }
    return -1;
};

// Test case
// Answer: 60
console.log(findPythagoreanTriplet(12));

// Task
// Answer: 31875000
console.log(findPythagoreanTriplet(1000));
