const controllerName = path.basename(__filename, '.socket.js')
module.exports = (socket, params) => {
  devLog('dataLog.socket :', params)

  let options = {
    page: params.page || 1,
    pageSize: params.pageSize || 10,
  }

  let filter = params.filter || {}

  
  db.dataLog
    .paginate(filter,options)
    .then(resp => socket.sendSuccess(controllerName, resp, params.callback))
    .catch((err) => socket.sendError(err, params.callback))
}
