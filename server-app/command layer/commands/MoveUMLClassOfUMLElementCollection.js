var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MoveUMLClassOfUMLElementCollectionCommand = (function (_super) {
    __extends(MoveUMLClassOfUMLElementCollectionCommand, _super);
    function MoveUMLClassOfUMLElementCollectionCommand(user, diagram, umlClass, x, y) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        _this.umlClass = umlClass;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    MoveUMLClassOfUMLElementCollectionCommand.prototype.execute = function () {
    };
    MoveUMLClassOfUMLElementCollectionCommand.prototype.undo = function () {
        // TODO
    };
    return MoveUMLClassOfUMLElementCollectionCommand;
}(Command));
//# sourceMappingURL=MoveUMLClassOfUMLElementCollection.js.map