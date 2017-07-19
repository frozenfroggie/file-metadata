'use strict';

var express = require('express');
//var cors = require('cors');

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage});

var app = express();

//app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/analyse',upload.single('upfile'), function(req, res){
  res.json({
    'field': req.file.fieldname,
    'name': req.file.originalname,
    'encoding': req.file.encoding,
    'type': req.file.mimetype,
    'size': req.file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
