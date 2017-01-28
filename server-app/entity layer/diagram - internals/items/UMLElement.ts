
abstract class UMLElement extends Entity
{
  private name : string;
  private x : number;
  private y : number;
  private width : number;
  private height : number;
  private lastUserModifiedBy : User;

  constructor(user : User, name : string, x : number, y : number, width : number, height : number)
  {
    super();
    this.lastUserModifiedBy = user;
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public setLastUserModifiedBy(user : User)
  {
    this.lastUserModifiedBy = user;
  }

  public setX(x : number)
  {
    this.x = x;
  }

  public setY(y : number)
  {
    this.y = y;
  }

  public setWidth(width : number)
  {
    this.width = width;
  }

  public setHeight(height : number)
  {
    this.height = height;
  }
}
