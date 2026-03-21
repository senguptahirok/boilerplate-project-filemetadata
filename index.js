var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var cors = require('cors');
require('dotenv').config()

var app = express(); 

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

let uploadMiddleware = upload.single('file');
app.post('/api/fileanalyse', uploadMiddleware, function(req, res, next){
//  res.json({name: upfile, type: File.mimetype, size: File.size, msg: "file uploaded successfully"});
    res.send('file uploaded successfully');
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
