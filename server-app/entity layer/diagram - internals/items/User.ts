
class User extends Entity
{
  private name : string;
  private cursor : Cursor;
  private color : String;

  public constructor(name, cursor)
  {
    super();
    this.name = name;
    this.cursor = cursor;
    this.color = this.getRandomColor();
  }

  getName()
  {
    return this.name;
  }

  getCursor()
  {
    return this.cursor;
  }

  private getRandomColor()
  {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
