
class Diagram extends Entity
{
  private name : string;
  private root : Component;
  private chatLineCollection : ChatLineCollection;
  private userCollection : UserCollection;

  public constructor(name)
  {
    super();
    this.name = name;
    this.root = new UMLPackage("Root");
    this.chatLineCollection = new ChatLineCollection();
    this.userCollection = new UserCollection();
  }

  public getName()
  {
    return this.name;
  }

  public getRoot()
  {
    return this.root;
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
