const express = require('express');
const router = express.Router();

const sort_algo = require('../algorithms/sort/algo_sort');

router.post('/', function (req, res, next) {
    var nums_array = req.body.data;
    var comparisons = 0;

    console.log(req.body.algo);

    nums_array = req.body.data.replace(/[^\d,-]/g, '').split(',');
    for(let i = 0; i < nums_array.length; i++) nums_array[i] = parseInt(nums_array[i]);
    if(req.body.algo === 'bubble'){
        comparisons = sort_algo.bubble_sort(nums_array);
    } else if(req.body.algo === 'insert'){
        comparisons = sort_algo.insertion_sort(nums_array);
    } else if(req.paramsbody.algo === 'count'){
        console.log(Math.min(nums_array), Math.max(nums_array));
        sort_algo.counting_sort(nums_array, getArrayMinVal(nums_array), getArrayMaxVal(nums_array));
        comparisons = 'a lot of'
    } else if(req.body.algo === 'merge'){
        comparisons = sort_algo.merge_sort(nums_array);
    } else if(req.body.algo === 'select'){
        comparisons = sort_algo.selection_sort(nums_array);
    } else if(req.body.algo === 'quick'){
        comparisons = sort_algo.quick_sort(nums_array, 0, nums_array.length);
    }

    res.send('{"result": "' + nums_array + '", "comparisons": "' + comparisons + '"}');
});

module.exports = router;