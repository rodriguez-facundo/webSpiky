#!/usr/bin/python
# -*- coding: utf-8 -*-
import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from handlers import JsonHandler
from handlers import loadParams
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
        response = loadParams(incoming_args).send()
        
        if response:
            # Set JSON response body through a dict.
            self.response = response 
        else:
            self.write_error(status_code=409, message='check json file')
        
        # Required at end of method (similar to self.write).
        self.write_json()

class RawDataHandler(DataHandler):
    def post(self):
        self.write(self.response)
        
class RunAlgorithmHandler(JsonHandler):
    def post(self):
        incoming_args = self.request.arguments
        self.response = ToyData().data
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
