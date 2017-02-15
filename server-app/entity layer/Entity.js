var Entity = (function () {
    function Entity() {
        this.uid = Entity.uidCounter;
        this.type = this.constructor;
        Entity.uidCounter++;
        Entity.entityMap.addEntity(this);
        this.typeId = this.getTypeIdByType(this.constructor);
    }
    Entity.prototype.getTypeIdByType = function (type) {
        for (var i = 0; i < Entity.typeList.length; i++) {
            if (type.name === Entity.typeList[i].name) {
                return i;
            }
        }
    };
    Entity.prototype.getUid = function () {
        return this.uid;
    };
    Entity.prototype.getType = function () {
        return this.type;
    };
    Entity.prototype.equals = function (entity) {
        var uid = entity.getUid();
        return (this.uid === uid);
    };
    Entity.prototype.serializeToJSONFile = function (fileName) {
        var fileSystem = Entity.fileSystem;
        var filePath = "data/" + fileName;
        var dataToWrite = JSON.stringify(this);
        fileSystem.writeFileSync(filePath, dataToWrite);
    };
    Entity.deserializeFromJSONFile = function (fileName) {
        var fileSystem = Entity.fileSystem;
        var filePath = "data/" + fileName;
        var contents = fileSystem.readFileSync(filePath, 'utf-8');
        var parsedJSONObject = JSON.parse(contents);
        var entity = Entity.traverseParsedJSONObject(parsedJSONObject);
        return entity;
    };
    Entity.traverseParsedJSONObject = function (object) {
        var entity;
        if (Object.prototype.toString.call(object) === '[object Array]') {
            entity = [];
        }
        else {
            entity = new Entity.typeList[object.typeId];
        }
        for (var key in object) {
            var propertyValue = object[key];
            if (propertyValue !== null && typeof (propertyValue) == "object") {
                entity[key] = Entity.traverseParsedJSONObject(propertyValue);
            }
            else {
                entity[key] = object[key];
            }
        }
        return entity;
    };
    Entity.getEntityMap = function () {
        return this.entityMap;
    };
    return Entity;
}());
Entity.uidCounter = 0;
Entity.entityMap = new EntityMap();
Entity.typeList = [];
Entity.fileSystem = require("fs");
//# sourceMappingURL=Entity.js.map