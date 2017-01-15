var SocketIOEvent = (function () {
    function SocketIOEvent(name, user, diagram, commandExecuter) {
        this.name = name;
        this.user = user;
        this.diagram = diagram;
        this.commandExecuter = commandExecuter;
    }
    SocketIOEvent.prototype.getName = function () {
        return this.name;
    };
    return SocketIOEvent;
}());
//# sourceMappingURL=SocketIOEvent.js.map