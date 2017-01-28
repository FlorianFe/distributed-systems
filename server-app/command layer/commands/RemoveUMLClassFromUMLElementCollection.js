var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RemoveUMLClassFromUMLElementCollectionCommand = (function (_super) {
    __extends(RemoveUMLClassFromUMLElementCollectionCommand, _super);
    function RemoveUMLClassFromUMLElementCollectionCommand(user, diagram, umlClass) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        _this.umlClass = umlClass;
        return _this;
    }
    RemoveUMLClassFromUMLElementCollectionCommand.prototype.execute = function () {
        var umlElementCollection = this.diagram.getUmlElementCollection();
        umlElementCollection.removeUMLElement(this.umlClass);
    };
    RemoveUMLClassFromUMLElementCollectionCommand.prototype.undo = function () {
        // TODO
    };
    return RemoveUMLClassFromUMLElementCollectionCommand;
}(Command));
//# sourceMappingURL=RemoveUMLClassFromUMLElementCollection.js.map