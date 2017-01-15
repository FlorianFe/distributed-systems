
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
    for(let i=0; i<this.users.length; i++)
    {
      if(this.users[i] === user)
      {
        this.users.splice(i, 1);
        return;
      }
    }
  }
}
