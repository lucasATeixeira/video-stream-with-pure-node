const path = require('path')
const { createReadStream } = require('fs')

const html = path.resolve(__dirname, '..', '..', 'views', 'home.html')

module.exports = function homeController(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  createReadStream(html, {
    encoding: 'utf-8'
  }).pipe(response)
}
