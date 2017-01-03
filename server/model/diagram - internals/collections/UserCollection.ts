
class UserCollection extends Entity
{
  private users : Array<User>;

  public constructor()
  {
    super();
    this.users = new Array();
  }

  addUser(user : User)
  {
    this.users.push(user);
  }

  removeUser(user : User)
  {
    // TODO
  }
}
