// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const countSumOfNaturalMultiplesLessThen = (first, second, Limit) => {
    let iter = 1;
    let accum = 0;
    while (iter < Limit){
        if ( ( iter%first === 0) || ( iter%second === 0) ) {
            accum += iter;
        }
        iter++;
    }
    return accum;
};

const get_list_of_multiples_in_diapason = (left_bound, right_bound, divisor) =>{
    let accum = [];
    const first_seq_elem = left_bound + left_bound % divisor; // ex l_b = 2, divisor = 5, --> first_elem  = 2 + 2%5 = 2 + 3 = 5
    for (let i = first_seq_elem; i < right_bound ; i += divisor )
        accum.push(i)
    return accum;
    };

const union_without_repetiotions = (first_list, sec_list) => {
    //merge_lists:
    let result_list = [];
    let i = 0, j = 0;
    while (i < first_list.length && j < sec_list.length  ){
        if (first_list[i] <= sec_list[j]) {
            result_list.push(first_list[i]);
            if (first_list[i] === sec_list[j]) {
                j++;
            }
            i++;
        }
        else
            result_list.push(sec_list[j++]);
    }


    if (i < first_list.length ) {
        for (;i< first_list.length; i++){
            result_list.push(first_list[i])
        }
    }
    if (j < sec_list.length ){
        for (;j< sec_list.length; j++){
            result_list.push(sec_list[j])
        }
    }
    return result_list
};

const count_sum_of_list_elems = (l) =>{
    let accum = 0;
    for (let i = 0; i < l.length; i++){
        accum+=l[i];
    }
    return accum;
};

const countSumOfNaturalMultiplesLessThen2 = (first, second, Limit) => {
    const first_seq = get_list_of_multiples_in_diapason(0,  Limit, first);
    const seqond_seq = get_list_of_multiples_in_diapason(0,  Limit, second);

    const union= union_without_repetiotions(first_seq, seqond_seq);

    const rez = count_sum_of_list_elems(union);

    return rez;
};

const countSumOfNaturalMultiplesLessThen3 = (first, second, Limit) => {
    let iter1 = 0;
    let iter2 = 0;
    let accum = 0;

    while (iter1 < Limit && iter2 < Limit){
        if (iter1 <= iter2){
            accum+=iter1;
            if (iter1 === iter2)
                iter2 += second;
            iter1 += first;
        }
        else{
            accum+=iter2;
            iter2 += second;
        }
    }

    while (iter1 < Limit){
        iter1+=first;
        accum += iter1;
    }
    while (iter2 < Limit){
        iter2+=second;
        accum += iter2;
    }

    return accum;
};


console.log(countSumOfNaturalMultiplesLessThen(3,5,10));
console.time('1');
console.log(countSumOfNaturalMultiplesLessThen(3,5,1000));
console.timeEnd('1');

console.time('2');
console.log(countSumOfNaturalMultiplesLessThen2(3,5,1000));
console.timeEnd('2');

console.time('3');
console.log(countSumOfNaturalMultiplesLessThen3(3,5,1000));
console.timeEnd('3');