var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InformationLogMessage = (function (_super) {
    __extends(InformationLogMessage, _super);
    function InformationLogMessage(message) {
        return _super.call(this, "information", "icons:question-answer", message) || this;
    }
    return InformationLogMessage;
}(LogMessage));
//# sourceMappingURL=InformationLogMessage.js.map