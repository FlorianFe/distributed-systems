
abstract class Composite extends Component
{
  private components : Array<Component>;

  public constructor()
  {
    super();
    this.components = new Array();
  }

  public addComponent(component : Component)
  {
    this.components.push(component);
  }

  public removeComponent(search : Component)
  {
    for(let i=0; i<this.components.length; i++)
    {
      let component = this.components[i];

      if(component === search)
      {
        this.components.slice(i, 1);
        return;
      }
    }
  }
}
