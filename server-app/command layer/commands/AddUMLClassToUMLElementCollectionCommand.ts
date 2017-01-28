class AddUMLClassToUMLElementCollectionCommand extends Command
{
  private diagram : Diagram;
  private user : User;
  private name : string;
  private x : number;
  private y : number;
  private width : number;
  private height : number;

  public constructor(user : User, diagram : Diagram, name : string, x : number, y : number,  width : number, height : number)
  {
    super();
    this.user = user;
    this.diagram = diagram;
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public execute()
  {
    let umlElementCollection = this.diagram.getUmlElementCollection();
    let umlClass = new UMLClass(this.user, this.name, this.x, this.y, this.width, this.height);

    umlElementCollection.addUMLElement(umlClass);
  }

  public undo()
  {
     // TODO
  }
}
