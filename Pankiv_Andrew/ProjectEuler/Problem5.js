function Problem5(from,to) {
    let start = 2520;
    while (true){
        let bool = true;
        for(let i = from; i < to + 1; ++i){
            if (start % i !== 0){
                bool = false;
                break;
            }
        }
        if (bool){
            return start;
        }
        ++start;
    }
}

console.log(Problem5(1,20));