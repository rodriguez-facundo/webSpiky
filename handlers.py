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
                jsonMessage = re.search(r"({.+})", self.request.body, re.DOTALL)
                
                # convert to dictionary
                jsonMessage = json_decode(jsonMessage.group(1))
                
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


class loadParams():
    
    def __init__(self, jsonIn):
        self.jsonIn = jsonIn
    
    def send(self):
        labels = ['filt', 'spkD', 'spkA', 'spkE', 'wv', 'gmm', 'blur']
        
        if all([label in self.jsonIn.keys() for label in labels]):
            jsonOut = dict()
            
            jsonOut['order'] = self.jsonIn['filt']['q']
            jsonOut['rate']  = self.jsonIn['filt']['hz']
            jsonOut['low']   = self.jsonIn['filt']['low']
            jsonOut['high']  = self.jsonIn['filt']['high']
            
            jsonOut['threshold'] = self.jsonIn['spkD']['thres']
            jsonOut['way'] = self.jsonIn['spkD']['way']
            jsonOut['minD'] = self.jsonIn['spkD']['minD']
            jsonOut['before'] = self.jsonIn['spkD']['before']
            jsonOut['after'] = self.jsonIn['spkD']['after']
            
            jsonOut['resolution'] = self.jsonIn['spkA']['resol']
            
            jsonOut['minDsimultaneous'] = self.jsonIn['spkE']['minD']
            jsonOut['ratioElimination'] = self.jsonIn['spkE']['lvl']
            
            jsonOut['wLvl']  = self.jsonIn['wv']['lvl']
            jsonOut['wFunc'] = self.jsonIn['wv']['func']
            jsonOut['wMode'] = self.jsonIn['wv']['mode']
            
            jsonOut['gaussians'] = self.jsonIn['gmm']['maxK']
            jsonOut['features'] = self.jsonIn['gmm']['ftrs']
            jsonOut['correlation'] = self.jsonIn['gmm']['maxCorr']
            jsonOut['initializations'] = self.jsonIn['gmm']['inits']
            
            jsonOut['alpha'] = self.jsonIn['blur']['alpha']
            
            return jsonOut
        
        else:
            return False
        
        
        
        
        
        
