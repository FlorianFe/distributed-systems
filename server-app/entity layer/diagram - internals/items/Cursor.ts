
class Cursor extends Entity
{
  private x : number;
  private y : number;

  public constructor(x, y)
  {
    super();
    this.x = x;
    this.y = y;
  }

  setX(x : number)
  {
    this.x = x;
  }

  setY(y : number)
  {
    this.y = y;
  }
}
