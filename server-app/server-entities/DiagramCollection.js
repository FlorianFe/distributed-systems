var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DiagramCollection = (function (_super) {
    __extends(DiagramCollection, _super);
    function DiagramCollection() {
        var _this = _super.call(this) || this;
        _this.diagrams = new Array();
        return _this;
    }
    DiagramCollection.prototype.addDiagram = function (diagram) {
        this.diagrams.push(diagram);
    };
    DiagramCollection.prototype.getDiagramByName = function (name) {
        for (var i = 0; i < this.diagrams.length; i++) {
            var diagram = this.diagrams[i];
            if (diagram.getName() === name) {
                return diagram;
            }
        }
    };
    return DiagramCollection;
}(Entity));
//# sourceMappingURL=DiagramCollection.js.map