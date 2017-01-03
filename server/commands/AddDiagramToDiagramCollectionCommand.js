var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddDiagramToDiagramCollectionCommand = (function (_super) {
    __extends(AddDiagramToDiagramCollectionCommand, _super);
    function AddDiagramToDiagramCollectionCommand(diagram, diagramCollection) {
        var _this = _super.call(this) || this;
        _this.diagram = diagram;
        _this.diagramCollection = diagramCollection;
        return _this;
    }
    AddDiagramToDiagramCollectionCommand.prototype.execute = function () {
        this.diagramCollection.addDiagram(this.diagram);
    };
    AddDiagramToDiagramCollectionCommand.prototype.undo = function () {
        // TODO
        //this.diagramCollection.removeDiagram(this.diagram);
    };
    return AddDiagramToDiagramCollectionCommand;
}(Command));
//# sourceMappingURL=AddDiagramToDiagramCollectionCommand.js.map