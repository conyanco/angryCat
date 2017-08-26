'use strict'

let http = require('http');
//let express = require('express');

const URL = 'http://productsearch.linksynergy.com/productsearch%3Ftoken=b0861c6d36b799b6355b4d1729a141c0d9dcab69272900f8d6f0822a3690e7e9&keyword=%2522%E3%83%95%E3%82%A1%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%2522';
const app = express();

http.get(URL, (res) => {
  let body = '';
  res.setEncoding('utf8');

  res.on('data', (chunk) => {
      body += chunk;
  });

  res.on('end', (res) => {
      res = JSON.parse(body);
      console.log(res);
  });
}).on('error', (e) => {
  console.log(e.message)
});
/*
app.get('/', function (req, res) {
	res.send('Hello World!');
	});
app.listen(3000, function () {
	console.log('listening on port 3000');
	});
*/
