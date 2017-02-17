
class SocketIOServer
{
  private io : any;
  private diagram : Diagram;
  private commandExecuter : CommandExecuter;

  private onUserConnectionCallbacks : Array<Function>;
  private onUserRegistrationCallbacks : Array<Function>;
  private onCommandExecutionCallbacks : Array<Function>;
  private onCommandExecutionFailedCallbacks : Array<Function>;
  private onUnauthorizedCommandExecutionCallbacks : Array<Function>;

  constructor(port : number, commandExecuter : CommandExecuter, diagram : Diagram)
  {
    let http = require('http').createServer().listen(port, '0.0.0.0');
    this.io = require("socket.io").listen(http);
    this.diagram = diagram;
    this.commandExecuter = commandExecuter;

    this.onUserConnectionCallbacks = [];
    this.onUserRegistrationCallbacks = [];
    this.onCommandExecutionCallbacks = [];
    this.onCommandExecutionFailedCallbacks = [];
    this.onUnauthorizedCommandExecutionCallbacks = [];

    this.io.on('connection', (socket) =>
    {
      let ip = socket.handshake.address;
      this.triggerOnUserConnectionCallbacks(ip);

      socket.on('register', (data) =>
      {
        let userName = data.userName;
        let cursor = new Cursor(0, 0);
        let user = new User(userName, cursor);

        socket.user = user;

        this.triggerOnUserRegistrationCallbacks(ip, userName);
        this.commandExecuter.executeCommand(new AddUserToDiagramCommand(user, this.diagram));
      });

      socket.on('cursor-move', (data) =>
      {
        let user = socket.user;
        let x = data.x;
        let y = data.y;

        this.executeCommandBySocket(socket, new CursorMoveCommand(user, this.diagram, x, y));
      });

      socket.on('create-uml-class', (data) =>
      {
        let user = socket.user;
        let name = data.name;
        let x = data.x;
        let y = data.y;
        let width = data.width;
        let height = data.height;

        this.executeCommandBySocket(socket, new AddUMLClassToUMLElementCollectionCommand(user, this.diagram, name, x, y, width, height));
      });

      socket.on('remove-uml-class', (data) =>
      {
        let user = socket.user;
        let uid = data.uid;
        let entityMap = Entity.getEntityMap();
        let umlClass = <UMLClass> (entityMap.getEntityByUid(uid));

        this.executeCommandBySocket(socket, new RemoveUMLClassFromUMLElementCollectionCommand(user, this.diagram, umlClass));
      });

      socket.on('move-uml-class', (data) =>
      {
        let user = socket.user;
        let uid = data.uid;
        let entityMap = Entity.getEntityMap();
        let umlClass = <UMLClass> (entityMap.getEntityByUid(uid));
        let x = data.x;
        let y = data.y;

        this.executeCommandBySocket(socket, new MoveUMLClassCommand(user, umlClass, x, y));
      });

      socket.on('chat-message-send', (data) =>
      {
        let user = socket.user;
        let message = data.message;

        this.executeCommandBySocket(socket, new AddChatLineToChatLineCollectionCommand(user, this.diagram, message));
      });

      socket.on('disconnect', () =>
      {
        let userCollection = this.diagram.getUserCollection();
        let user = socket.user;

        userCollection.removeUser(user);
      })
    });
  }

  private executeCommandBySocket(socket, command)
  {
    let user = socket.user;
    let userIp = socket.handshake.address;
    let commandName = command.constructor.name;

    if(user)
    {
      let userName = user.getName();

      try
      {
        this.commandExecuter.executeCommand(command);
        this.io.sockets.emit("diagram-update", {diagram: this.diagram});
        this.triggerOnCommandExecutionCallbacks(userIp, userName, commandName);
      }
      catch(e)
      {
        this.triggerOnCommandExecutionFailedCallbacks(userIp, userName, commandName, e);
      }
    }
    else
    {
      this.triggerOnUnatuorizedCommandExecutionCallbacks(userIp, commandName);
    }
  }

  public setDiagram(diagram : Diagram)
  {
      this.diagram = diagram;
      this.io.sockets.emit("diagram-update", {diagram: this.diagram});
  }

  // === Observer Part === ///

  public onUserConnection(callback : Function)
  {
    this.onUserConnectionCallbacks.push(callback);
  }

  public onUserRegistration(callback : Function)
  {
    this.onUserRegistrationCallbacks.push(callback);
  }

  public onCommandExecution(callback : Function)
  {
    this.onCommandExecutionCallbacks.push(callback);
  }

  public onUnauthorisedCommandExecution(callback : Function)
  {
    this.onUnauthorizedCommandExecutionCallbacks.push(callback);
  }

  public onCommandExecutionFailed(callback : Function)
  {
    this.onCommandExecutionFailedCallbacks.push(callback);
  }

  private triggerOnUserConnectionCallbacks(userIP : String)
  {
    this.onUserConnectionCallbacks.forEach((callback) =>
    {
      callback(
      {
        userIP : userIP
      });
    });
  }

  private triggerOnUserRegistrationCallbacks(userIP : String, userName : String)
  {
    this.onUserRegistrationCallbacks.forEach((callback) =>
    {
      callback(
      {
        userIP : userIP,
        userName : userName
      });
    });
  }

  private triggerOnCommandExecutionCallbacks(userIP : String, userName : String, commandName : String)
  {
    this.onCommandExecutionCallbacks.forEach((callback) =>
    {
      callback(
      {
        userName : userName,
        userIP : userIP,
        commandName : commandName
      });
    });
  }

  private triggerOnUnatuorizedCommandExecutionCallbacks(userIP : String, commandName : String)
  {
    this.onUnauthorizedCommandExecutionCallbacks.forEach((callback) =>
    {
      callback(
      {
        userIP : userIP,
        commandName : commandName
      });
    });
  }

  private triggerOnCommandExecutionFailedCallbacks(userIP : String, userName : String, commandName : String, exception : Error)
  {
    this.onCommandExecutionFailedCallbacks.forEach((callback) =>
    {
      callback(
      {
        userName : userName,
        userIP : userIP,
        commandName : commandName,
        exception: exception
      });
    });
  }
}
