const sequenceLength = function (sequence, length) {
    if (sequence === 1) return length;
    if (sequence % 2 === 0) {
        return sequenceLength(sequence / 2, length);
    } else {
        return sequenceLength(3 * sequence + 1, length + 1);
    }
};

const longestCollatzSequence = function (maxNumber) {
    var n = parseInt(maxNumber);
    var maxSequence = 0;
    var bestResultingNumber = 1;

    for (let i = 2; i < n; ++i){
        var currentLength = sequenceLength(i, 1);
        if (currentLength > maxSequence){
            maxSequence = currentLength;
            bestResultingNumber = i;
        }
    }

    return bestResultingNumber;
};

module.exports = longestCollatzSequence;