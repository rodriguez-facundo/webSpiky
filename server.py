#!/usr/bin/python
# -*- coding: utf-8 -*-
import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from handlers import JsonHandler

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')

class ParamsHandler(JsonHandler):
    def post(self):
        # Access JSON request body through a dict.
        incoming_args = self.request.arguments

        # Set JSON response body through a dict.
        self.response = incoming_args 

        # Required at end of method (similar to self.write).
        self.write_json()

if __name__ == '__main__':
    tornado.options.parse_command_line()
    app = tornado.web.Application( handlers=[
        (r'/', IndexHandler),
        (r'/uploadParams', ParamsHandler)], 
        static_path=os.path.join(os.path.dirname(__file__), "dist"),
        template_path=os.path.join(os.path.dirname(__file__), "dist"))
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
