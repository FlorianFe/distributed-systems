var Entity = (function () {
    function Entity() {
        this.uuid = Entity.uuidCounter;
        this.type = this.constructor;
        Entity.uuidCounter++;
    }
    Entity.prototype.getUuid = function () {
        return this.uuid;
    };
    Entity.prototype.getType = function () {
        return this.type;
    };
    Entity.setEntityMap = function (entityMap) {
        Entity.entityMap = entityMap;
    };
    return Entity;
}());
Entity.uuidCounter = 0;
//# sourceMappingURL=Entity.js.map