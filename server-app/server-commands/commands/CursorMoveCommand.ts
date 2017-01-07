class CursorMoveCommand extends Command
{
  private user : User;
  private diagram : Diagram;
  private x : number;
  private y : number;

  public constructor(user : User, diagram : Diagram, x : number, y : number)
  {
    super();
    this.user = user;
    this.diagram = diagram;
    this.x = x;
    this.y = y;
  }

  public execute()
  {
    let cursor = this.user.getCursor();

    cursor.setX(this.x);
    cursor.setY(this.y);
  }

  public undo()
  {
    // Todo
  }
}
