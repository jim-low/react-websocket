const http = require('http')
const { WebSocketServer } = require('ws')
const url = require('url')
const uuidv4 = require('uuid').v4

const server = http.createServer()
const wsServer = new WebSocketServer({ server })
const PORT = 8000

const connections = {}
const users = {}

wsServer.on("connection", (connection, request) => {
  const { username } = url.parse(request.url, true).query
  const uuid = uuidv4()

  connections[uuid] = connection
  users[uuid] = { username }
})

server.listen(PORT, () => {
  console.log(`Websocket server running on port: ${PORT}`)
})
