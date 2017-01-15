var Entity = (function () {
    function Entity() {
        this.uid = Entity.uuidCounter;
        this.type = this.constructor;
        Entity.uuidCounter++;
    }
    Entity.prototype.getUid = function () {
        return this.uid;
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