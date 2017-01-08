var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddChatLineToChatLineCollection = (function (_super) {
    __extends(AddChatLineToChatLineCollection, _super);
    function AddChatLineToChatLineCollection(user, diagram, message) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.diagram = diagram;
        _this.message = message;
        return _this;
    }
    AddChatLineToChatLineCollection.prototype.execute = function () {
        var chatLineCollection = this.diagram.getChatLineCollection();
        var authorName = this.user.getName();
        var chatLine = new ChatLine(authorName, this.message);
        chatLineCollection.addChatLine(chatLine);
    };
    AddChatLineToChatLineCollection.prototype.undo = function () {
        // Todo
    };
    return AddChatLineToChatLineCollection;
}(Command));
//# sourceMappingURL=AddChatLineToChatLineCollection.js.map