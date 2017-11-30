var express = require('express');
var router = express.Router();
const fs = require('fs');
const euler = require('../algorithms/euler/euler');


const global_data = require('../global_data.json');

router.get('/:taskNumber', function (req, res, next) {
    console.log(req.params.taskNumber);
    if (euler.available_tasks.includes(parseInt(req.params.taskNumber))){
        var problemData = global_data['euler_' + req.params.taskNumber];
        var data = {
            title: problemData.title,
            autoscroll_target: 'go-main',

            description: problemData.description,
            image: problemData.image,
            source_code: fs.readFileSync(problemData.file_name)
        };
        console.log(euler.solutions[1]());
        res.render('algorithm', data);
    }
});

module.exports = router;