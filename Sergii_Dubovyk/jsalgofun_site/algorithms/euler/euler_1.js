const f = function () {
    var total = 0;

    for(var i = 1; i < 1000; i++){
        if (i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }

    return total;
};

module.exports = f;