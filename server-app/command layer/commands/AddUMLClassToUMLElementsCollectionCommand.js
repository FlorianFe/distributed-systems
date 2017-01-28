var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddUMLClassToElementsCollectionCommand = (function (_super) {
    __extends(AddUMLClassToElementsCollectionCommand, _super);
    function AddUMLClassToElementsCollectionCommand(diagram, user, name, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.diagram = diagram;
        _this.user = user;
        _this.name = name;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    AddUMLClassToElementsCollectionCommand.prototype.execute = function () {
        var umlElementCollection = this.diagram.getUmlElementCollection();
        var umlClass = new UMLClass(this.user, this.name, this.x, this.y, this.width, this.height);
        umlElementCollection.addUMLElement(umlClass);
    };
    AddUMLClassToElementsCollectionCommand.prototype.undo = function () {
        // TODO
    };
    return AddUMLClassToElementsCollectionCommand;
}(Command));
//# sourceMappingURL=AddUMLClassToUMLElementsCollectionCommand.js.map