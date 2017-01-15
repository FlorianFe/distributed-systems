
class ChatLineCollection extends Entity
{
  private chatLines : Array<ChatLine>;

  public constructor()
  {
    super();
    this.chatLines = new Array();
  }

  public addChatLine(chatLine : ChatLine)
  {
    this.chatLines.push(chatLine);
  }
}
