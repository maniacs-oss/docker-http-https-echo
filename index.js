var express = require('express')
var app = express()
var os = require('os')

app.set('json spaces', 2);

app.all('*', (req, res) => {
  res.json({
    path: req.path,
    headers: req.headers,
    method: req.method,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    query: req.query,
    subdomains: req.subdomains,
    xhr: req.xhr,
    os: {
      hostname: os.hostname()
    }
  })
})

app.listen(process.env.PORT || 3000)
