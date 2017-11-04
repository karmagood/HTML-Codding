var express = require('express');
var router = express.Router();
var fs = require('fs');
var global_data = require('../global_data.json');

var bubblesort = require('../algorithms/sort/bubblesort');

const sort_algo = require('../algorithms/sort/algo_sort');

router.get('/:algorithmName', function (req, res, next) {
    var problemData = global_data['sort_' + req.params.algorithmName];
    if (problemData === null){
        res.send("Not found");
    }
    var data = {
        algo_name: problemData .title,
        title: problemData.title,
        image: problemData.image,
        autoscroll_target: 'go-main',
        source_code: fs.readFileSync(problemData.file_name),
        description: problemData.description,
        input_form: true
    };
    res.render('algorithm', data)
}).post('/:algorithmName', function (req, res, next) {
    var data_array = false;

    var nums_array;
    var comparisons;

    var problemData = global_data['sort_' + req.params.algorithmName];
    if (problemData === null){
        res.send("Not found");
    }

    if (req.body.sort_data){
        data_array = true;
        nums_array = req.body.sort_data.replace(/[^\d,-]/g, '').split(',');
        if(req.params.algorithmName === 'bubble'){
            comparisons = sort_algo.bubble_sort(nums_array);
        } else if(req.params.algorithmName === 'insert'){
            comparisons = sort_algo.insertion_sort(nums_array);
        } else if(req.params.algorithmName === 'count'){
            comparisons = sort_algo.counting_sort(nums_array, 0, nums_array.length);
        } else if(req.params.algorithmName === 'merge'){
            comparisons = sort_algo.merge_sort(nums_array);
        } else if(req.params.algorithmName === 'select'){
            comparisons = sort_algo.selection_sort(nums_array);
        } else if(req.params.algorithmName === 'quick'){
            comparisons = sort_algo.quick_sort(nums_array, 0, nums_array.length);
        }
    }

    var data = {
        algo_name: problemData .title,
        title: problemData.title,
        image: problemData.image,
        autoscroll_target: 'go-main',
        source_code: fs.readFileSync(problemData.file_name),
        description: problemData.description,
        input_form: true,

        page_header: problemData.title,

        sorted_array: nums_array,
        comparison_num: comparisons,
        data: data_array
    };
    res.render('algorithm', data)
});

module.exports = router;