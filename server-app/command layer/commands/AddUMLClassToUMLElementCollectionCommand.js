var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddUMLClassToUMLElementCollectionCommand = (function (_super) {
    __extends(AddUMLClassToUMLElementCollectionCommand, _super);
    function AddUMLClassToUMLElementCollectionCommand(user, diagram, name, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        _this.name = name;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    AddUMLClassToUMLElementCollectionCommand.prototype.execute = function () {
        var umlElementCollection = this.diagram.getUmlElementCollection();
        var umlClass = new UMLClass(this.user, this.name, this.x, this.y, this.width, this.height);
        umlElementCollection.addUMLElement(umlClass);
    };
    AddUMLClassToUMLElementCollectionCommand.prototype.undo = function () {
        // TODO
    };
    return AddUMLClassToUMLElementCollectionCommand;
}(Command));
//# sourceMappingURL=AddUMLClassToUMLElementCollectionCommand.js.map