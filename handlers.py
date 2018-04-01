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

class DataHandler(tornado.web.RequestHandler):
    """Request handler where requests and responses speak JSON."""
    def prepare(self):
        # Incorporate request JSON into arguments dictionary.
        if self.request.body:
            try:
                print(self.request.body)
                print(self.request)
                print(self.request.headers)
                
            except ValueError:
                message = 'Unable to parse JSON'
                self.send_error(400, message=message) # Bad Request

        # Set up response dictionary.
        self.response = {'yep': 'OK'}

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
        
class ToyData():
    def __init__(self):
        self.SpkX = [
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013]
        ]
        self.SpkY = [
            [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
            [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
            [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
            [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23]
        ]

        self.ConfZ = [
            [2,1,0,0,8], 
            [2,1,0,6,1], 
            [1,0,6,0,2], 
            [2,6,3,0,0], 
            [9,2,0,1,0]
            ] 
            
        self.ConfX = ['A', 'B', 'C','D', 'E'] 
        self.ConfY = ['D', 'B', 'A','C', 'E']

        self.ClusX = [
            [ 0.08731538, -0.04270267, -0.29077513, -0.31370927, -0.07432252,
            0.28609431,  0.05008101,  0.28258836,  0.06967662, -0.16446508,
            -0.01285413,  0.14312565,  0.29960411,  0.02289828, -0.24715278,
            0.07583746,  0.07728099,  0.09607313, -0.093368  ,  0.15007938],
            [2.36940477, 1.78203319, 1.70237827, 1.40236646, 2.3123079 ,
            1.70445563, 2.14988068, 1.58168289, 1.85958822, 2.20876474,
            1.70284579, 1.52614529, 1.90465468, 2.13670672, 1.87940749,
            2.67993114, 2.20639979, 2.49218472, 2.36517667, 2.34613175],
            [0.5881891 , 0.45870614, 1.3404044 , 1.61293274, 1.59829197,
            1.32299325, 1.02527175, 1.47092933, 0.68070403, 1.00720235,
            0.64221628, 1.0090012 , 0.50779143, 1.84088065, 0.65791984,
            0.14134759, 0.98470173, 0.88074774, 1.23553684, 1.16406777]
        ]
        self.ClusY = [
            [ 0.35821097,  0.154238  , -0.23281662,  0.31482525,  0.9984801 ,
            -0.53092604,  0.52284265,  0.33358817, -0.3111087 ,  0.0117814 ,
            0.04110982, -0.28501077, -0.3984928 , -0.45620229, -0.44948047,
            0.68152262,  0.01445961,  0.42928748, -0.91184986, -0.09226606],
            [1.78356487, 2.36475028, 1.62636701, 2.02483386, 1.55905643,
            1.67738952, 1.7111918 , 1.804376  , 2.04383256, 2.65568356,
            1.98631599, 1.76502554, 2.281955  , 2.14746661, 1.51784977,
            1.57726222, 2.00053188, 1.40146623, 1.58074309, 2.80688231],
            [1.18573661, 0.83619516, 0.78040949, 0.43149414, 0.95219168,
            1.33418913, 1.22858947, 0.52267507, 0.9854226 , 0.53744869,
            0.36009926, 1.94237948, 1.04301191, 0.62091859, 0.89259686,
            0.62245556, 1.05520001, 0.82269108, 1.36657253, 1.00935653]
        ]

        self.ClusL = [0, 1, 2]
        
        self.data = {
            'spikes': {
                'x': self.SpkX,
                'y': self.SpkY, 
            },
            'confusion':{
                'z': self.ConfZ,
                'x': self.ConfX,
                'y': self.ConfY,
            },
            'clusters': {
                'x': self.ClusX,
                'y': self.ClusY,
                'labels': self.ClusL
            }    
        }
        
        
        
        
