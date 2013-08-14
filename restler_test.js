var sys = require('util'),
  rest = require('restler'),
  fs = require('fs')

rest.get('http://google.com').on('complete', function(result) {
  if (result instanceof Error) {
    console.log("error")
  } else {
    fs.writeFile('url.txt', result, function(err) {
      if (err) throw err;
      console.log('saved')
    });
  }
});
