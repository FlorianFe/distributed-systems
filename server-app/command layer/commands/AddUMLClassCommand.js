var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddUMLClassCommand = (function (_super) {
    __extends(AddUMLClassCommand, _super);
    function AddUMLClassCommand(user, name, x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.name = name;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    AddUMLClassCommand.prototype.execute = function () {
    };
    AddUMLClassCommand.prototype.undo = function () {
        // TODO
    };
    return AddUMLClassCommand;
}(Command));
//# sourceMappingURL=AddUMLClassCommand.js.map