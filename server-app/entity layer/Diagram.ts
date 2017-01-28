
class Diagram extends Entity
{
  private umlElementCollection : UMLElementCollection;
  private chatLineCollection : ChatLineCollection;
  private userCollection : UserCollection;

  public constructor()
  {
    super();
    this.umlElementCollection = new UMLElementCollection();
    this.chatLineCollection = new ChatLineCollection();
    this.userCollection = new UserCollection();
  }

  public getUmlElementCollection()
  {
    return this.umlElementCollection;
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
