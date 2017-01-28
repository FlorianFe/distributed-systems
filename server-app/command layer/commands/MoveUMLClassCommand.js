var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MoveUMLClassCommand = (function (_super) {
    __extends(MoveUMLClassCommand, _super);
    function MoveUMLClassCommand(user, umlClass, x, y) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.umlClass = umlClass;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    MoveUMLClassCommand.prototype.execute = function () {
        this.umlClass.setX(this.x);
        this.umlClass.setY(this.y);
        this.umlClass.setLastUserModifiedBy(this.user);
    };
    MoveUMLClassCommand.prototype.undo = function () {
        // TODO
    };
    return MoveUMLClassCommand;
}(Command));
//# sourceMappingURL=MoveUMLClassCommand.js.map