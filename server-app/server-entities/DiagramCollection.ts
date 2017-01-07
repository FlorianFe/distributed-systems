
class DiagramCollection extends Entity
{
  private diagrams : Array<Diagram>;

  public constructor()
  {
    super();
    this.diagrams = new Array();
  }

  public addDiagram(diagram : Diagram)
  {
    this.diagrams.push(diagram);
  }

  public getDiagramByName(name : string)
  {
    for(let i=0; i<this.diagrams.length; i++)
    {
      let diagram = this.diagrams[i];
      if(diagram.getName() === name)
      {
        return diagram;
      }
    }
  }
}
