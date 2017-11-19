const SpecialPythagoreanTriplet = () => {
    for(let c = 0; c<1000; c++){
        for(let b = 0; b<1000; b++){
            for(let a = 0; a<1000; a++){
                if ((a+b+c===1000)&&(a*a+b*b===c*c)){
                    return a*b*c
                }
            }
        }
    }
};

console.log(SpecialPythagoreanTriplet());