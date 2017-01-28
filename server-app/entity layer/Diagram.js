var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Diagram = (function (_super) {
    __extends(Diagram, _super);
    function Diagram() {
        var _this = _super.call(this) || this;
        _this.umlElementCollection = new UMLElementCollection();
        _this.chatLineCollection = new ChatLineCollection();
        _this.userCollection = new UserCollection();
        return _this;
    }
    Diagram.prototype.getUmlElementCollection = function () {
        return this.umlElementCollection;
    };
    Diagram.prototype.getChatLineCollection = function () {
        return this.chatLineCollection;
    };
    Diagram.prototype.getUserCollection = function () {
        return this.userCollection;
    };
    return Diagram;
}(Entity));
//# sourceMappingURL=Diagram.js.map