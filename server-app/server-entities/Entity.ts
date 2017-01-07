abstract class Entity
{
  protected uid : number;
  protected type : any;
  protected static uuidCounter : number = 0;
  protected static entityMap : EntityMap;

  constructor()
  {
    this.uid = Entity.uuidCounter;
    this.type = this.constructor;
    Entity.uuidCounter++;
  }

  getUid() : number
  {
    return this.uid;
  }

  getType() : any
  {
    return this.type;
  }

  static setEntityMap(entityMap : EntityMap)
  {
    Entity.entityMap = entityMap;
  }
}
