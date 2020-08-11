const { createServer } = require('http')

const routes = require('./routes')

const server = createServer((request, response) => {
  for(route of routes) {
    if (request.method === route.method && request.url === route.url) {
      route.controller(request, response)
    }
  }
})

server.listen(3000, () => console.log('Server listening o port 3000'))

