var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ErrorLogMessage = (function (_super) {
    __extends(ErrorLogMessage, _super);
    function ErrorLogMessage(message) {
        return _super.call(this, "error", "icons:bug-report", message) || this;
    }
    return ErrorLogMessage;
}(LogMessage));
//# sourceMappingURL=ErrorLogMessage.js.map