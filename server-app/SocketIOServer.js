var SocketIOServer = (function () {
    function SocketIOServer(port, diagram) {
        var _this = this;
        this.io = require("socket.io").listen(port);
        this.diagram = diagram;
        this.fireLogInformationEvent("Socket.IO Server started on port " + port);
        this.io.on('connection', function (socket) {
            var ip = socket.handshake.address;
            _this.fireLogInformationEvent('User with IP ' + ip + ' connected.');
            socket.on('register', function (data) {
                var userName = data.userName;
                var cursor = new Cursor(0, 0);
                var user = new User(userName, cursor);
                socket.user = user;
                _this.fireLogInformationEvent(ip + ' registered his-/herself as "' + user.getName() + '"');
                _this.commandExecuter.executeCommand(new AddUserToDiagramCommand(user, _this.diagram));
            });
            (new SocketIOCursorMoveEvent(user, diagram)).register();
            socket.on('cursor-move', function (data) {
                var user = socket.user;
                var x = data.x;
                var y = data.y;
                _this.executeCommandWithUser(user, new CursorMoveCommand(user, _this.diagram, x, y));
            });
            socket.on('chat-message-send', function (data) {
                var user = socket.user;
                var message = data.message;
                _this.executeCommandWithUser(user, new AddChatLineToChatLineCollectionCommand(user, _this.diagram, message));
            });
            socket.on('disconnect', function () {
                var userCollection = _this.diagram.getUserCollection();
                var user = socket.user;
                userCollection.removeUser(user);
            });
        });
    }
    SocketIOServer.prototype.fireLogInformationEvent = function (message) {
    };
    SocketIOServer.prototype.fireLogWarningEvent = function (message) {
    };
    SocketIOServer.prototype.fireLogErrorEvent = function (message) {
    };
    SocketIOServer.prototype.registerSocketIOEvent = function (socket, socketIOEvent) {
        var eventName = socketIOEvent.getName();
        var callback = socketIOEvent.register;
        socket.on(eventName, callback);
    };
    SocketIOServer.prototype.notifyClients = function () {
        this.io.sockets.emit("diagram-update", { diagram: this.diagram });
    };
    SocketIOServer.prototype.executeCommandWithUser = function (user, command) {
        if (user) {
            try {
                this.commandExecuter.executeCommand(command);
                this.fireLogInformationEvent(user.getName() + ' triggered ' + command.constructor.name);
                this.io.sockets.emit("diagram-update", { diagram: this.diagram });
            }
            catch (e) {
                this.fireLogErrorEvent(user.getName() + ' failed on triggering ' + command.constructor.name);
            }
        }
        else {
            this.fireLogWarningEvent('Someone unregistered tried to  trigger ' + command.constructor.name);
        }
    };
    return SocketIOServer;
}());
//# sourceMappingURL=SocketIOServer.js.map