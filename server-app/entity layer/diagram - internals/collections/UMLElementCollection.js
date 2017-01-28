var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UMLElementCollection = (function (_super) {
    __extends(UMLElementCollection, _super);
    function UMLElementCollection() {
        var _this = _super.call(this) || this;
        _this.umlElements = new Array();
        return _this;
    }
    UMLElementCollection.prototype.addUMLElement = function (umlElement) {
        this.umlElements.push(umlElement);
    };
    UMLElementCollection.prototype.removeUMLElement = function (umlElement) {
        for (var i = 0; i < this.umlElements.length; i++) {
            if (umlElement === this.umlElements[i]) {
                this.umlElements.splice(i, 1);
                return;
            }
        }
        throw Error("Element can't be removed, because it was not found in UMLCollection!");
    };
    return UMLElementCollection;
}(Entity));
//# sourceMappingURL=UMLElementCollection.js.map