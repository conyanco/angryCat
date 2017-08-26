'use trict';
const http = require('http');
const url = require("url");
const fs = require('fs');
const querystring = require('querystring');

let server = http.createServer(function(req, res) {
	let pathname = url.parse(req.url).pathname;
	
	switch (pathname) {
	
	case '/':
	
	if (req.method === 'GET') {
		fs.readFile('./index.html', 'UTF-8', function(err, data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
	break;

	case '/result':
	
	if (req.method === 'POST') {
		let body = '';
		req.on('data', function(chunk) {
			body += chunk;
		});

		req.on('end',function(){
			let form = querystring.parse(body);
			let text = form.result;
			fs.readFile('./index.html', 'UTF-8', function(err, data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end('「'+ text + '」と入力しました。');
			});
		});
	}
	
	break;
	
	}
});

server.listen(3000, function() {
	console.log('listening on port 3000');
});
