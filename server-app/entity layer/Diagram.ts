
class Diagram extends Entity
{
  private chatLineCollection : ChatLineCollection;
  private userCollection : UserCollection;

  public constructor()
  {
    super();
    this.chatLineCollection = new ChatLineCollection();
    this.userCollection = new UserCollection();
  }

  public getChatLineCollection()
  {
    return this.chatLineCollection;
  }

  public getUserCollection()
  {
    return this.userCollection;
  }
}
