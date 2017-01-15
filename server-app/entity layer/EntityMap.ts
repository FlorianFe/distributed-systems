class EntityMap
{
  private map : any;

  constructor()
  {
    this.map = {};
  }

  addEntity(entity : Entity)
  {
    this.map[entity.getUid()] = entity;
  }

  getEntityByUid(uid : number) : Entity
  {
    return this.map[uid];
  }
}
