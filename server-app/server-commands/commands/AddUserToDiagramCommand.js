var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddUserToDiagramCommand = (function (_super) {
    __extends(AddUserToDiagramCommand, _super);
    function AddUserToDiagramCommand(user, diagram) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        return _this;
    }
    AddUserToDiagramCommand.prototype.execute = function () {
        this.diagram.getUserCollection().addUser(this.user);
    };
    AddUserToDiagramCommand.prototype.undo = function () {
        this.diagram.getUserCollection().removeUser(this.user);
    };
    return AddUserToDiagramCommand;
}(Command));
//# sourceMappingURL=AddUserToDiagramCommand.js.map