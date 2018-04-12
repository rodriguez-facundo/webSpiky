#!/usr/bin/python
# -*- coding: utf-8 -*-
import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
from tornado.escape import json_encode
import spiky
import numpy as np

from handlers import JsonHandler
from handlers import back2frontParams
from handlers import front2backParams
from handlers import DataHandler
from handlers import ToyData

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')

class ParamsHandler(JsonHandler):
    def post(self):
        # Access JSON request body through a dict.
        incoming_args = self.request.arguments

        # convert from Spiky to webSpiky representation
        response = back2frontParams(incoming_args).send()

        if response:
            # Set JSON response body through a dict.
            self.response = response
        else:
            self.write_error(status_code=409, message='check json file')

        # Required at end of method (similar to self.write).
        self.write_json()

class RawDataHandler(DataHandler):
    def post(self):
        self.write_json()

class RunAlgorithmHandler(JsonHandler):
    def post(self):
        incoming_args = self.request.arguments

        # create spike class
        spk = spiky.New()

        # load data
        spk.loadParamsDict(front2backParams(incoming_args['params']).send())
        spk.loadRawArray(np.array(incoming_args['rawData']['x']))

        # run algorithm
        spk.run()

        # convert to numpy arrays
        spk.spks = np.array(spk.spks)

        # unique labels
        uL = set(spk.labels)

        # spikes by label
        spikes = [[pt.tolist() for pt in spk.spks[(spk.labels==l)]] for l in uL]

        # group features by label
        spk.X = [spk.X[(spk.labels==l)] for l in uL]
        a = [x[:,0].tolist() for x in spk.X]

        spk.blur(False)
        print(spk.confusion)
        print(spk.l1)
        print(spk.l2)
        # construct response
        self.response = {
            'spikes': {
                'y': spikes,
                'labels': [int(l) for l in uL]
            },
            'confusion':{
                'z': spk.confusion,
                'x': spk.l1,
                'y': spk.l2
            },
            'clusters': {
                'x': [[x[:,dir].tolist() for x in spk.X] for dir in [0, 0, 1]],
                'y': [[y[:,dir].tolist() for y in spk.X] for dir in [1, 2, 2]],
                'labels': [int(l) for l in uL],
                'directions': [[0,1], [0,2], [1,2]]
            }
        }
        self.write_json()


if __name__ == '__main__':
    tornado.options.parse_command_line()
    app = tornado.web.Application( handlers=[
        (r'/', IndexHandler),
        (r'/uploadParams', ParamsHandler),
        (r'/uploadData', RawDataHandler),
        (r'/runAlgorithm', RunAlgorithmHandler)],
        static_path=os.path.join(os.path.dirname(__file__), "dist"),
        template_path=os.path.join(os.path.dirname(__file__), "dist"))
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
