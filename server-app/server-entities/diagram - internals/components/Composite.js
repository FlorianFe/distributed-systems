var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Composite = (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super.call(this) || this;
        _this.components = new Array();
        return _this;
    }
    Composite.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    Composite.prototype.removeComponent = function (search) {
        for (var i = 0; i < this.components.length; i++) {
            var component = this.components[i];
            if (component === search) {
                this.components.slice(i, 1);
                return;
            }
        }
    };
    return Composite;
}(Component));
//# sourceMappingURL=Composite.js.map