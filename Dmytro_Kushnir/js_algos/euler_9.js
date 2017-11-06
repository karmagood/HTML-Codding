// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
//                                                                             a2 + b2 = c2
//     For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pyhtagoreanTripletWithSum(sumOfTriplet) {
    for (maxEl = Math.ceil(sumOfTriplet / 3); maxEl <= sumOfTriplet - 3; maxEl++){
        //rest1 = sumOfTriplet - maxEl;
        for (midEl = maxEl - 1; midEl >= 2; midEl-- ){
            minEl = sumOfTriplet - midEl - maxEl;
            // console.log([minEl, midEl, maxEl]);

            if (midEl*midEl + minEl*minEl === maxEl*maxEl){
                console.log("EUREKA!");
                return [minEl, maxEl, midEl];
            }

        }
    }
    return null;
}

const triplet = pyhtagoreanTripletWithSum(1000);
console.log(triplet);
console.log(triplet[0] * triplet[1] * triplet[2]);