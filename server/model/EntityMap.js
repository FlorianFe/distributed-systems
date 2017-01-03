var EntityMap = (function () {
    function EntityMap() {
        this.map = {};
    }
    EntityMap.prototype.addEntity = function (entity) {
        this.map[entity.getUuid()] = entity;
    };
    EntityMap.prototype.getEntityByUuid = function (uuid) {
        return this.map[uuid];
    };
    return EntityMap;
}());
//# sourceMappingURL=EntityMap.js.map