var express = require('express'),
      app = express(),
      router = require('./router'),
      port = process.env.PORT || 8080;

app.use('/', router);

app.listen(port, function () {
  console.log("Listening on port: " + port);
});
