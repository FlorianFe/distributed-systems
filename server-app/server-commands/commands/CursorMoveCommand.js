var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CursorMoveCommand = (function (_super) {
    __extends(CursorMoveCommand, _super);
    function CursorMoveCommand(user, diagram, x, y) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    CursorMoveCommand.prototype.execute = function () {
        var cursor = this.user.getCursor();
        cursor.setX(this.x);
        cursor.setY(this.y);
    };
    CursorMoveCommand.prototype.undo = function () {
        // Todo
    };
    return CursorMoveCommand;
}(Command));
//# sourceMappingURL=CursorMoveCommand.js.map