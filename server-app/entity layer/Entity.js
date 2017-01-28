var Entity = (function () {
    function Entity() {
        this.uid = Entity.uidCounter;
        this.type = this.constructor;
        Entity.uidCounter++;
        Entity.entityMap.addEntity(this);
    }
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
    Entity.setEntityMap = function (entityMap) {
        Entity.entityMap = entityMap;
    };
    Entity.getEntityMap = function () {
        return this.entityMap;
    };
    return Entity;
}());
Entity.uidCounter = 0;
//# sourceMappingURL=Entity.js.map