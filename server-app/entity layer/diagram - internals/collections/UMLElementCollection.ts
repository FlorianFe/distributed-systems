
class UMLElementCollection extends Entity
{
  private umlElements : Array<UMLElement>;

  public constructor()
  {
    super();
    this.umlElements = new Array();
  }

  public addUMLElement(umlElement : UMLElement)
  {
    this.umlElements.push(umlElement);
  }

  public removeUMLElement(umlElement : UMLElement)
  {
    for(let i=0; i<this.umlElements.length; i++)
    {
      if(umlElement === this.umlElements[i])
      {
        this.umlElements.splice(i, 1);
        return;
      }
    }

    throw Error("Element can't be removed, because it was not found in UMLCollection!");
  }
}
