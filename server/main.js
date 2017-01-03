var commandExecuter = new CommandExecuter();
var entityMap = new EntityMap();
Entity.setEntityMap(entityMap);
var diagramCollection = new DiagramCollection();
diagramCollection.addDiagram(new Diagram("Neues Diagramm"));
var umlServerAppComponent = document.getElementsByTagName("uml-server-app")[0];
umlServerAppComponent.diagramCollection = diagramCollection;
io.on('connection', function (socket) {
    socket.on('register', function (data) {
        var userName = data.userName;
        var roomName = data.roomName;
        socket.join(roomName);
        var user = new User(userName);
        try {
            var diagram = diagramCollection.getDiagramByName(roomName);
            commandExecuter.executeCommand(new AddUserToDiagramCommand(user, diagram));
        }
        catch (e) {
            console.log('No Diagram with name "' + roomName + '" found. Creating new...');
            commandExecuter.executeCommand(new AddDiagramToDiagramCollectionCommand(new Diagram(roomName), diagramCollection));
            var diagram = diagramCollection.getDiagramByName(roomName);
            commandExecuter.executeCommand(new AddUserToDiagramCommand(user, diagram));
        }
    });
    socket.on('mouse move', function () {
    });
    console.log('a user connected');
});
//# sourceMappingURL=main.js.map