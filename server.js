const Mustache = require('mustache');
const Less = require('less');

const {promisify} = require('util');
const readFile = promisify(require('fs').readFile);

const express = require('express');
const app = express();

const PROJECT_ROOT = process.argv[2];
const SOURCE_DIR = __dirname + "/" + PROJECT_ROOT;

app
    .use('/images', express.static(SOURCE_DIR + "/images"))

    .get('*.css', async (req, res) => {
        try {
            let less = await readFile(SOURCE_DIR + req.params[0] + ".less", {encoding: 'utf8'});
            less = await new Promise((res, rej) => {
                Less.render(
                    less,
                    {paths: ['.', SOURCE_DIR + "/Header"]},
                    (e, output) => e ? rej(e) : res(output)
                )
            });

            res.set({"Content-Type": "text/css; charset=UTF-8"});
            res.send(less.css);

        } catch (err) {
            res.sendFile(SOURCE_DIR + req.params[0] + ".css");
        }
    })
    .get('*.js', async (req, res) => {
        try {
            let js = await readFile(SOURCE_DIR + req.params[0] + ".js", {encoding: 'utf8'});
            res.send(js);
        } catch (err) {
            console.log(err);
            res.sendFile(SOURCE_DIR + req.params[0] + ".css");
        }
    })
    .get('/:page?', async (req, res) => {

        try {
            const path = SOURCE_DIR + "/" + (req.params.page || "index") + ".mustache";

            let [template, data] = await Promise.all([
                readFile(path, {encoding: 'utf8'}),
                readFile(SOURCE_DIR + `/data/data.json`, {encoding: 'utf8'})
            ]);

            data = JSON.parse(data);
            const html = Mustache.render(template, data);
            res.send(html);
        } catch (e) {
            console.log(e);
            res.sendFile(SOURCE_DIR + "/" + req.params.page + ".html");
        }

    })


    .listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })
