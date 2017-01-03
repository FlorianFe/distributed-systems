
class ChatLine extends Entity
{
  private author : string;
  private message : string;

  public constructor(author, message)
  {
    super();
    this.author = author;
    this.message = message;
  }

  public getAuthor()
  {
    return this.author;
  }

  public getMessage()
  {
    return this.message;
  }
}
