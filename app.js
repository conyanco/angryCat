'use strict'

let http = require('http');
let express = require('express');

const URL = 'http://qiita.com/kazuhikoyamashita/items/273692ccbdf8c0950a71.json';
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

app.get('/', function (req, res) {
	res.send('Hello World!');
	});
app.listen(3000, function () {
	console.log('listening on port 3000');
	});
