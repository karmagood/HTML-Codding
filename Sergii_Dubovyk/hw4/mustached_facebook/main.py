from flask import Flask, render_template, send_from_directory
import pystache
import codecs
import simplejson as json


app = Flask(__name__, static_url_path='')


@app.route('/')
def hello_world():
    f = codecs.open('templates/index.html', encoding='utf-8')
    view = f.read()

    data_file = codecs.open('data.json', encoding='utf-8')
    data = json.load(data_file)

    rendered = pystache.render(view, data)
    return rendered


@app.route('/css/<path:path>')
def send_js(path):
    return send_from_directory('static/css', path)


@app.route('/img/<path:path>')
def send_img(path):
    return send_from_directory('static/img', path)


if __name__ == '__main__':
    app.run()
