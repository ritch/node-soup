var app = require('./app')
  , io = require('socket.io').listen(app)
  , all = io.sockets
  , connected = []
  , messages = require('db').messages
;

io.sockets.on('connection', function(socket) {
  socket.emit('start', 'Welcome to node-soup!');
  socket.on('message', function(data) {
    console.log(data);
    connected.forEach(function(s) {
      save(data);
      s.emit('recieve', data);
    });
  });
  
  connected.push(socket);
});

function save(data) {
  messages.insert(data, function(err, result) {
    
  });
}