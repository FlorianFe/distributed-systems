abstract class LogMessage
{
  protected message : string;
  protected type : string;
  protected icon : string;
  protected amount : number;

  constructor(type : string, icon: string, message : string)
  {
    this.type = type;
    this.message = message;
    this.icon = icon;
    this.amount = 1;
  }

  getMessage()
  {
    return this.message;
  }

  incrementAmount()
  {
    this.amount++;
  }
}
