// Special Pythagorean triplet

function pythagoreanTriplet() {
    let perimeter = 1000;
    for (let a = 1; a < perimeter; a++) {
        for (let b = a + 1; b < perimeter; b++) {
            let c = perimeter - a - b;
            if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                return console.log(a * b * c);
            }
        }
    }
}

pythagoreanTriplet();