const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  let requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

  server.use(express.static('public'))
  server.use(requestTime)

  server.get('/test', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Request at: ${ req.requestTime } </small>`
    res.send(responseText)
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${ port }`)
  })
})