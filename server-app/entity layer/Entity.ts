abstract class Entity
{
  protected uid : number;
  protected type : any;
  protected static uidCounter : number = 0;
  protected static entityMap : EntityMap;

  constructor()
  {
    this.uid = Entity.uidCounter;
    this.type = this.constructor;
    Entity.uidCounter++;
    Entity.entityMap.addEntity(this);
  }

  getUid() : number
  {
    return this.uid;
  }

  getType() : any
  {
    return this.type;
  }

  equals(entity : Entity)
  {
    let uid = entity.getUid();
    return (this.uid === uid);
  }

  static setEntityMap(entityMap : EntityMap)
  {
    Entity.entityMap = entityMap;
  }

  static getEntityMap()
  {
    return this.entityMap;
  }
}
