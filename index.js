var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var players = [];

app.get('/', function(req, res){
  res.send(`<h1>
░░█▀░░░░░░░░░░░▀▀███████░░░░ <br>
░░█▌░░░░░░░░░░░░░░░▀██████░░░ <br>
░█▌░░░░░░░░░░░░░░░░███████▌░░ <br>
░█░░░░░░░░░░░░░░░░░████████░░ <br>
▐▌░░░░░░░░░░░░░░░░░▀██████▌░░ <br>
░▌▄███▌░░░░▀████▄░░░░▀████▌░░ <br>
▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░ <br>
▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌ <br>
▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌ <br>
▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌ <br>
░▌░░▀▀▄▄▀▀▄▌▌░░░░░░░░░░▐░▀▐▐░ <br>
░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░ <br>
░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░ <br>
░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░ <br>
░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░ <br>
░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░ <br>
░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░ <br>
░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░ <br>
░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░ <br>
▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░ <br>
░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄ <br>
░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░ <br>
░░▄▌████████▄▄▄███████▌░░░░░▄ <br>
░▄▀░██████████████████▌▀▄░░░░ <br>
▀░░░█████▀▀░░░▀███████░░░▀▄░░ <br>
░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░ <br>
░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀ <br>
░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░ <br>
░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░ <br>
░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░ <br>
░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═╝░ <br>
  	</h1>`);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
	console.log("Player Connected!");
	socket.emit('socketId',{id: socket.id});
});

function player(id,nume,x,y) {
	this.x = x;
	this.y = y;
};