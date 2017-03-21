/**
 * Created by ekim on 21/3/17.
 */

//Lets require/import the HTTP module
var http = require('http');
var qs = require("querystring");
var fs = require('fs');
var pos = require('../node_modules/pos');

//Lets define a port we want to listen to
const PORT=8080;

var server = http.createServer(function(req, res) {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

	if (req.method == 'POST') {

		var reqBody = '';
		req.on('data', function (data) {
			reqBody += data;
			if (reqBody.length > 1e7) { //10MB
				resp.writeHead(413, 'Request Entity Too Large', { 'Content-Type': 'text/html' });
				resp.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
			}
		});

		req.on('end', function () {
			var formData = qs.parse(reqBody);
			console.log(formData);
			var resultdata = [];
			if (formData.op == "pos") {

				var words = new pos.Lexer().lex( formData.sentence );
				var taggedWords = new pos.Tagger().tag(words);

				resultdata = taggedWords;
				console.log(taggedWords);

				//formData.sentence;
				console.log("save jsx file");
			}
			res.end(JSON.stringify(resultdata));
		});
	}

	if (req.method == 'GET') {
		console.log(req.url);
		res.end(req.url);
	}
}).listen(PORT,function(){
	console.log("Server listening on:... http://localhost:%s", PORT);
});