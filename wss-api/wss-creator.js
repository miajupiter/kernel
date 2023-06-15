const WebSocketServer = require('ws').WebSocketServer
const url = require('url')
const uuid = require('uuid')
const v8 = require('v8')

module.exports = function (options) {
  return new Promise(async (resolve, reject) => {
    const moduleHolder = await util.moduleLoader(
      options.controllerPath,
      '.socket.js'
    )
    var webSocketServer = new WebSocketServer(options)
    webSocketServer.socketListByUuid = {}
    webSocketServer.socketListByClientId = {}

    webSocketServer.on('connection', (socket, req) => {
      socket.wss = webSocketServer
      socket.ip = (
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        socket.conn.remoteAddress ||
        ''
      )
        .split(',')[0]
        .trim()
      socket.isAlive = true
      socket.lastPong = new Date()
      socket.id = uuid.v4()
      socket.pathname = url.parse(req.url).pathname
      socket.subscribed = false
      socket.sendError = (err, callback) => sendError(socket, err, callback)
      socket.sendSuccess = (event, data, callback) =>
        sendSuccess(socket, event, data, callback)
      socket.pingIntervalId = setInterval(
        () => socket.ping(),
        process.env.WSS_PING_INTERVAL || 30000
      )

      socket.callbackList = {}
      socket.clientId = null
      socket.clientSession = null

      socket.on('pong', () => moduleHolder.pong(socket))

      socket.on('message', (message) => {
        try {
          let data = JSON.parse(message.toString())

          if (data.callback && socket.callbackList[data.callback]) {
            socket.callbackList[data.callback](data)
          } else {
            if(!['error','pong','subscribe'].includes(data.event) && !socket.subscribed){
              socket.sendError('Authentication failed')
            }else if (data.event && moduleHolder[data.event]) {
              moduleHolder[data.event](socket, data)
            } else {
              errorLog(`[WssAPI] error`.cyan,`Function not found: ${data.event}`)
              socket.sendError('Function not found')
            }
          }
        } catch (err) {
          errorLog('[WssAPI] error'.cyan, err)
        }
      })

      socket.on('error', (err) => {
        errorLog('[WssAPI] error'.cyan, err)
      })

      socket.on('close', (code, reason) => {
        devLog(`[WssAPI] onclose:`.cyan, code, reason.toString())
        delete webSocketServer.socketListByUuid[socket.id]
        purgeSocket(socket)
        eventLog(`Total client:`, webSocketServer._server._connections)
      })

      devLog('Connected', socket.ip, socket.id)
      eventLog(`Total client:`, webSocketServer._server._connections)

      webSocketServer.socketListByUuid[socket.id] = socket
    })

    eventLog(`[WssAPI]`.cyan, 'started')
    // uyuyanlariGemidenAt()
    resolve()
  })
}

global.purgeSocket = (socket) => {
  try {
    delete socket.wss.socketListByUuid[socket.id]
    socket.clientId && delete socket.wss.socketListByClientId[socket.clientId]
    clearInterval(socket.timeIntervalId)
    clearInterval(socket.pingIntervalId)
    socket.terminate()
  } catch (err) {
    console.error(err)
  }
}

// throw the sleepers out of the boat

// function uyuyanlariGemidenAt() {
//   if (global.wss) {
//     let gemidenAtildi = false
//     global.wss.clients.forEach((socket) => {
//       if (socket.isAlive === false) {
//         purgeSocket(socket)
//         gemidenAtildi = true
//       } else {
//         socket.isAlive = false
//         socket.ping()
//       }
//     })

//     gemidenAtildi && eventLog(`Total client:`, wss._server._connections)
//   }

//   setTimeout(() => {
//     uyuyanlariGemidenAt()
//   }, Number(process.env.WS_PING_INTERVAL || 5000))
// }

function sendError(socket, err, callback) {
  let error = 'Error'
  if (typeof err == 'string') {
    error = err
  } else if (typeof err == 'object') {
    error = err.message || err.name || 'Error'
  }

  const obj = {
    event: callback || 'error',
    success: false,
    error: error,
  }
  devError(`[SendError]`.cyan, JSON.stringify(obj))
  socket.send(JSON.stringify(obj))
}

function sendSuccess(socket, event, data, callback) {
    const obj = {
      event: event,
      success: true,
      data: data,
    }
    if (callback) {
      obj.callback = callback
    }
    socket.send(JSON.stringify(obj))
 
}


// function sendSuccess(socket, event, data, callback) {

//   if(event=='subscribed'){
//     const obj = {
//       event: event,
//       success: true,
//       data: data,
//     }
//     if (callback) {
//       obj.callback = callback
//     }
//     socket.send(JSON.stringify(obj))

//   }else{
    
//     devLog(`[SendSuccess] data.totalDocs before: ${data.totalDocs}`)
//     if(data.docs){
//       for(let i=0;i<15;i++){
//         let a=data.docs.concat(data.docs)
//         data.docs=a
//       }
  
//       data.totalDocs=data.docs.length
//       devLog(`[SendSuccess] data.totalDocs: ${data.totalDocs}`)
//     }
//     const obj = {
//       event: event,
//       success: true,
//       data: data,
//     }
//     if (callback) {
//       obj.callback = callback
//     }
//     devLog(`[SendSuccess] before stringify`)
//     let msg=JSON.stringify(obj)
//     devLog(`[SendSuccess] after stringify, before send msg.length: ${msg.length}`)

//     socket.send(msg)
//     devLog(`[SendSuccess] the end `, event, ' msg length:', msg.length)
//   }
 

  
// }
