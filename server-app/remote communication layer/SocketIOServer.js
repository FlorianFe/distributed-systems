var SocketIOServer = (function () {
    function SocketIOServer(port, commandExecuter, diagram) {
        var _this = this;
        var http = require('http').createServer().listen(port, '0.0.0.0');
        this.io = require("socket.io").listen(http);
        this.diagram = diagram;
        this.commandExecuter = commandExecuter;
        this.onUserConnectionCallbacks = [];
        this.onUserRegistrationCallbacks = [];
        this.onCommandExecutionCallbacks = [];
        this.onCommandExecutionFailedCallbacks = [];
        this.onUnauthorizedCommandExecutionCallbacks = [];
        this.io.on('connection', function (socket) {
            var ip = socket.handshake.address;
            _this.triggerOnUserConnectionCallbacks(ip);
            socket.on('register', function (data) {
                var userName = data.userName;
                var cursor = new Cursor(0, 0);
                var user = new User(userName, cursor);
                socket.user = user;
                _this.triggerOnUserRegistrationCallbacks(ip, userName);
                _this.commandExecuter.executeCommand(new AddUserToDiagramCommand(user, _this.diagram));
            });
            socket.on('cursor-move', function (data) {
                var user = socket.user;
                var x = data.x;
                var y = data.y;
                _this.executeCommandBySocket(socket, new CursorMoveCommand(user, _this.diagram, x, y));
            });
            socket.on('create-uml-class', function (data) {
                var user = socket.user;
                var name = data.name;
                var x = data.x;
                var y = data.y;
                var width = data.width;
                var height = data.height;
                _this.executeCommandBySocket(socket, new AddUMLClassToUMLElementCollectionCommand(user, _this.diagram, name, x, y, width, height));
            });
            socket.on('remove-uml-class', function (data) {
                var user = socket.user;
                var uid = data.uid;
                var entityMap = Entity.getEntityMap();
                var umlClass = (entityMap.getEntityByUid(uid));
                _this.executeCommandBySocket(socket, new RemoveUMLClassFromUMLElementCollectionCommand(user, _this.diagram, umlClass));
            });
            socket.on('move-uml-class', function (data) {
                var user = socket.user;
                var uid = data.uid;
                var entityMap = Entity.getEntityMap();
                var umlClass = (entityMap.getEntityByUid(uid));
                var x = data.x;
                var y = data.y;
                _this.executeCommandBySocket(socket, new MoveUMLClassCommand(user, umlClass, x, y));
            });
            socket.on('chat-message-send', function (data) {
                var user = socket.user;
                var message = data.message;
                _this.executeCommandBySocket(socket, new AddChatLineToChatLineCollectionCommand(user, _this.diagram, message));
            });
            socket.on('disconnect', function () {
                var userCollection = _this.diagram.getUserCollection();
                var user = socket.user;
                userCollection.removeUser(user);
            });
        });
    }
    SocketIOServer.prototype.executeCommandBySocket = function (socket, command) {
        var user = socket.user;
        var userIp = socket.handshake.address;
        var commandName = command.constructor.name;
        if (user) {
            var userName = user.getName();
            try {
                this.commandExecuter.executeCommand(command);
                this.io.sockets.emit("diagram-update", { diagram: this.diagram });
                this.triggerOnCommandExecutionCallbacks(userIp, userName, commandName);
            }
            catch (e) {
                this.triggerOnCommandExecutionFailedCallbacks(userIp, userName, commandName, e);
            }
        }
        else {
            this.triggerOnUnatuorizedCommandExecutionCallbacks(userIp, commandName);
        }
    };
    SocketIOServer.prototype.setDiagram = function (diagram) {
        this.diagram = diagram;
        this.io.sockets.emit("diagram-update", { diagram: this.diagram });
    };
    // === Observer Part === ///
    SocketIOServer.prototype.onUserConnection = function (callback) {
        this.onUserConnectionCallbacks.push(callback);
    };
    SocketIOServer.prototype.onUserRegistration = function (callback) {
        this.onUserRegistrationCallbacks.push(callback);
    };
    SocketIOServer.prototype.onCommandExecution = function (callback) {
        this.onCommandExecutionCallbacks.push(callback);
    };
    SocketIOServer.prototype.onUnauthorisedCommandExecution = function (callback) {
        this.onUnauthorizedCommandExecutionCallbacks.push(callback);
    };
    SocketIOServer.prototype.onCommandExecutionFailed = function (callback) {
        this.onCommandExecutionFailedCallbacks.push(callback);
    };
    SocketIOServer.prototype.triggerOnUserConnectionCallbacks = function (userIP) {
        this.onUserConnectionCallbacks.forEach(function (callback) {
            callback({
                userIP: userIP
            });
        });
    };
    SocketIOServer.prototype.triggerOnUserRegistrationCallbacks = function (userIP, userName) {
        this.onUserRegistrationCallbacks.forEach(function (callback) {
            callback({
                userIP: userIP,
                userName: userName
            });
        });
    };
    SocketIOServer.prototype.triggerOnCommandExecutionCallbacks = function (userIP, userName, commandName) {
        this.onCommandExecutionCallbacks.forEach(function (callback) {
            callback({
                userName: userName,
                userIP: userIP,
                commandName: commandName
            });
        });
    };
    SocketIOServer.prototype.triggerOnUnatuorizedCommandExecutionCallbacks = function (userIP, commandName) {
        this.onUnauthorizedCommandExecutionCallbacks.forEach(function (callback) {
            callback({
                userIP: userIP,
                commandName: commandName
            });
        });
    };
    SocketIOServer.prototype.triggerOnCommandExecutionFailedCallbacks = function (userIP, userName, commandName, exception) {
        this.onCommandExecutionFailedCallbacks.forEach(function (callback) {
            callback({
                userName: userName,
                userIP: userIP,
                commandName: commandName,
                exception: exception
            });
        });
    };
    return SocketIOServer;
}());
//# sourceMappingURL=SocketIOServer.js.map