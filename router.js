
var express = require('express'),
      router = express.Router(),
      multer = require('multer'),
//if you have dropbox or S3 bucket can reference in dest
      upload = multer({ dest: 'uploads/' });

router.use(express.static('./public'));

//POST route for file upload
router.post('/getfile', upload.single('avatar'), function(req, res) {
  console.log('file uploaded with reference: ' + req.file.filename + ' on ' + (new Date().toString()));
  console.log('file encoded in: ' + req.file.encoding);
  res.json({ size: req.file.size, type: req.file.mimetype });
});

module.exports = router;
