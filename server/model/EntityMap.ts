class EntityMap
{
  private map : any;

  constructor()
  {
    this.map = {};
  }

  addEntity(entity : Entity)
  {
    this.map[entity.getUuid()] = entity;
  }

  getEntityByUuid(uuid : number) : Entity
  {
    return this.map[uuid];
  }
}
