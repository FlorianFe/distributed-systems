class AddDiagramToDiagramCollectionCommand extends Command
{
  private diagram : Diagram;
  private diagramCollection : DiagramCollection;

  public constructor(diagram : Diagram, diagramCollection : DiagramCollection)
  {
    super();
    this.diagram = diagram;
    this.diagramCollection = diagramCollection;
  }

  public execute()
  {
    this.diagramCollection.addDiagram(this.diagram);
  }

  public undo()
  {
    // TODO
    //this.diagramCollection.removeDiagram(this.diagram);
  }
}
