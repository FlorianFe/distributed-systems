class MoveUMLClassCommand extends Command
{
  private user : User;
  private umlClass : UMLClass;
  private x : number;
  private y : number;

  public constructor(user : User, umlClass : UMLClass, x : number, y : number)
  {
    super();
    this.user = user;
    this.umlClass = umlClass;
    this.x = x;
    this.y = y;
  }

  public execute()
  {
    this.umlClass.setX(this.x);
    this.umlClass.setY(this.y);
    this.umlClass.setLastUserModifiedBy(this.user);
  }

  public undo()
  {
     // TODO
  }
}
