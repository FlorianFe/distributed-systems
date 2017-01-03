class AddUserToDiagramCommand extends Command
{
  private user : User;
  private diagram : Diagram;

  public constructor(user : User, diagram : Diagram)
  {
    super();
    this.user = user;
    this.diagram = diagram;
  }

  public execute()
  {
    this.diagram.getUserCollection().addUser(this.user);
  }

  public undo()
  {
    this.diagram.getUserCollection().removeUser(this.user);
  }
}
