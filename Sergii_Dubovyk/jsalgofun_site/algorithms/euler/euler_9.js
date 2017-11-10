const findPythagoreanTriplet = function (requiredProduct) {
    for (var c = requiredProduct; c >= 3; --c) {
        for (var b = c - 1; b >= 2; --b) {
            for (var a = b - 1; a >= 1; --a) {
                if (a + b + c === requiredProduct && a * a + b * b === c * c) return a * b * c;

            }
        }
    }
};

module.exports = findPythagoreanTriplet;