var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddClassToPackageCommand = (function (_super) {
    __extends(AddClassToPackageCommand, _super);
    function AddClassToPackageCommand(umlClass, umlPackage) {
        var _this = _super.call(this) || this;
        _this.umlClass = umlClass;
        _this.umlPackage = umlPackage;
        return _this;
    }
    AddClassToPackageCommand.prototype.execute = function () {
        this.umlPackage.addComponent(this.umlClass);
    };
    AddClassToPackageCommand.prototype.undo = function () {
        this.umlPackage.removeComponent(this.umlClass);
    };
    return AddClassToPackageCommand;
}(Command));
//# sourceMappingURL=AddClassToPackageCommand.js.map