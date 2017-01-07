var EntityMap = (function () {
    function EntityMap() {
        this.map = {};
    }
    EntityMap.prototype.addEntity = function (entity) {
        this.map[entity.getUid()] = entity;
    };
    EntityMap.prototype.getEntityByUid = function (uid) {
        return this.map[uid];
    };
    return EntityMap;
}());
//# sourceMappingURL=EntityMap.js.map