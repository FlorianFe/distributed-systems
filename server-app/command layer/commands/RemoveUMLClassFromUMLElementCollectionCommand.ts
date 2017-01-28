class RemoveUMLClassFromUMLElementCollectionCommand extends Command
{
  private diagram : Diagram;
  private user : User;
  private umlClass : UMLClass;

  public constructor(user : User, diagram : Diagram, umlClass : UMLClass)
  {
    super();
    this.user = user;
    this.diagram = diagram;
    this.umlClass = umlClass;
  }

  public execute()
  {
    let umlElementCollection = this.diagram.getUmlElementCollection();
    umlElementCollection.removeUMLElement(this.umlClass);
  }

  public undo()
  {
     // TODO
  }
}
