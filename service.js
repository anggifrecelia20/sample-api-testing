const url = require('url');

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    name = 'World';

    var response = "Hello " + name;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};


exports.helloRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    world = 'World';

    var response = "Hello" + ", " + world + "!";
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

}


exports.hello_nameRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    name = '';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = "Hello" + ", " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

}

exports.testRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        var postBody = 'x';

        var response = {
            "text": "Post Request Value is  " + postBody
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};