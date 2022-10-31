// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const port = process.env.PORT || 3000
const nextConfig = require('./next.config')

const app = next({
  dir: __dirname,
  conf: nextConfig
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) {
      throw err
    }
    else {
      console.log(`> ${new Date()} Ready on http://localhost:${port} Using the fancy server js file!`);
    }
  })
})