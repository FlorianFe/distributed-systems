var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChatLineCollection = (function (_super) {
    __extends(ChatLineCollection, _super);
    function ChatLineCollection() {
        var _this = _super.call(this) || this;
        _this.chatLines = new Array();
        return _this;
    }
    ChatLineCollection.prototype.addChatLine = function (chatLine) {
        this.chatLines.push(chatLine);
    };
    return ChatLineCollection;
}(Entity));
//# sourceMappingURL=ChatLineCollection.js.map