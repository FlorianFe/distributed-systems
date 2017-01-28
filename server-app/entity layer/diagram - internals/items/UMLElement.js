var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UMLElement = (function (_super) {
    __extends(UMLElement, _super);
    function UMLElement(user, name, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.lastUserModifiedBy = user;
        _this.name = name;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    UMLElement.prototype.setLastUserModifiedBy = function (user) {
        this.lastUserModifiedBy = user;
    };
    UMLElement.prototype.setX = function (x) {
        this.x = x;
    };
    UMLElement.prototype.setY = function (y) {
        this.y = y;
    };
    UMLElement.prototype.setWidth = function (width) {
        this.width = width;
    };
    UMLElement.prototype.setHeight = function (height) {
        this.height = height;
    };
    return UMLElement;
}(Entity));
//# sourceMappingURL=UMLElement.js.map