let commandExecuter = new CommandExecuter();

let entityMap = new EntityMap();
Entity.setEntityMap(entityMap);

let diagramCollection = new DiagramCollection();
diagramCollection.addDiagram(new Diagram("Neues Diagramm"));

let umlServerAppComponent : any = document.getElementsByTagName("uml-server-app")[0];
umlServerAppComponent.diagramCollection = diagramCollection;

io.on('connection', function(socket)
{
  socket.on('register', (data) =>
  {
    let userName = data.userName;
    let roomName = data.roomName;

    socket.join(roomName);

    let user = new User(userName);
    try
    {
      let diagram = diagramCollection.getDiagramByName(roomName);
      commandExecuter.executeCommand(new AddUserToDiagramCommand(user, diagram));
    }
    catch(e)
    {
      console.log('No Diagram with name "' + roomName + '" found. Creating new...');
      commandExecuter.executeCommand(new AddDiagramToDiagramCollectionCommand(new Diagram(roomName), diagramCollection));
      let diagram = diagramCollection.getDiagramByName(roomName);
      commandExecuter.executeCommand(new AddUserToDiagramCommand(user, diagram));
    }

  });

  socket.on('mouse move', () =>
  {

  });

  console.log('a user connected');
});
