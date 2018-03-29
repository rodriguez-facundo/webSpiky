import re
import tornado.web
from tornado.escape import json_decode
from tornado.escape import json_encode

class JsonHandler(tornado.web.RequestHandler):
    """Request handler where requests and responses speak JSON."""
    def prepare(self):
        # Incorporate request JSON into arguments dictionary.
        if self.request.body:
            try:
                # find json content in string
                jsonMessage = re.search(r"({.*?})", self.request.body).group(1)
                
                # convert to dictionary
                jsonMessage = json_decode(jsonMessage)
                
                print(jsonMessage['fruta1'])
                # update arguments
                self.request.arguments.update(jsonMessage)
                
            except ValueError:
                message = 'Unable to parse JSON'
                self.send_error(400, message=message) # Bad Request

        # Set up response dictionary.
        self.response = dict()

    def set_default_headers(self):
        self.set_header('Content-Type', 'application/json')

    def write_error(self, status_code, **kwargs):
        if 'message' not in kwargs:
            if status_code == 405:
                kwargs['message'] = 'Invalid HTTP method.'
            else:
                kwargs['message'] = 'Unknown error.'

        self.response = kwargs
        self.write_json()

    def write_json(self):
        output = json_encode(self.response)
        self.write(output)
