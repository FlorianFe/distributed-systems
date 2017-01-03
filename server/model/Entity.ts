abstract class Entity
{
  protected uuid : number;
  protected type : any;
  protected static uuidCounter : number = 0;
  protected static entityMap : EntityMap;

  constructor()
  {
    this.uuid = Entity.uuidCounter;
    this.type = this.constructor;
    Entity.uuidCounter++;
  }

  getUuid() : number
  {
    return this.uuid;
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
