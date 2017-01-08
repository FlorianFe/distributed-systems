class AddChatLineToChatLineCollectionCommand extends Command
{
  private user : User;
  private diagram : Diagram;
  private message: String;

  public constructor(user : User, diagram : Diagram, message: String)
  {
    super();
    this.user = user;
    this.diagram = diagram;
    this.message = message;
  }

  public execute()
  {
    let chatLineCollection = this.diagram.getChatLineCollection();
    let authorName = this.user.getName();
    let chatLine = new ChatLine(authorName, this.message);

    chatLineCollection.addChatLine(chatLine);
  }

  public undo()
  {
    // Todo
  }
}
