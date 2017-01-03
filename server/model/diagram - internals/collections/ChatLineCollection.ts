
class ChatLineCollection extends Entity
{
  private chatLines : Array<ChatLine>;

  public constructor()
  {
    super();
    this.chatLines = new Array();
  }

  public addChatLine(name, message)
  {
    this.chatLines.push(new ChatLine(name, message));
  }
}
