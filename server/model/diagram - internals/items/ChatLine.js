var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChatLine = (function (_super) {
    __extends(ChatLine, _super);
    function ChatLine(author, message) {
        var _this = _super.call(this) || this;
        _this.author = author;
        _this.message = message;
        return _this;
    }
    ChatLine.prototype.getAuthor = function () {
        return this.author;
    };
    ChatLine.prototype.getMessage = function () {
        return this.message;
    };
    return ChatLine;
}(Entity));
//# sourceMappingURL=ChatLine.js.map