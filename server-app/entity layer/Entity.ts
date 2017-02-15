abstract class Entity
{
  protected uid : number;
  protected type : any;
  protected typeId : number;

  protected static uidCounter : number = 0;
  protected static entityMap : EntityMap = new EntityMap();
  public static typeList : Array<any> = [];

  private static fileSystem = require("fs");

  constructor()
  {
    this.uid = Entity.uidCounter;
    this.type = this.constructor;

    Entity.uidCounter++;
    Entity.entityMap.addEntity(this);

    this.typeId = this.getTypeIdByType(this.constructor);
  }

  private getTypeIdByType(type : any) : number
  {
    for(let i=0; i<Entity.typeList.length; i++)
    {
      if(type.name === Entity.typeList[i].name)
      {
        return i;
      }
    }
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

  serializeToJSONFile(fileName : string)
  {
    let fileSystem = Entity.fileSystem;
    let filePath = "data/" + fileName;
    let dataToWrite = JSON.stringify(this);

    fileSystem.writeFileSync(filePath, dataToWrite);
  }

  static deserializeFromJSONFile(fileName : string)
  {
    let fileSystem = Entity.fileSystem;
    let filePath = "data/" + fileName;
    let contents = fileSystem.readFileSync(filePath, 'utf-8');

    let parsedJSONObject = JSON.parse(contents);
    let entity = Entity.traverseParsedJSONObject(parsedJSONObject);

    return entity;
  }

  private static traverseParsedJSONObject(object)
  {
    let entity;

    if( Object.prototype.toString.call(object) === '[object Array]' )
    {
      entity = [];
    }
    else
    {
      entity = new Entity.typeList[object.typeId];
    }

    for(var key in object)
    {
      let propertyValue = object[key];

      if (propertyValue !== null && typeof(propertyValue) == "object")
      {
        entity[key] = Entity.traverseParsedJSONObject(propertyValue);
      }
      else
      {
        entity[key] = object[key];
      }
    }

    return entity;
  }

  static getEntityMap()
  {
    return this.entityMap;
  }
}
