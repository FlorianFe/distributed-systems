var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WarningLogMessage = (function (_super) {
    __extends(WarningLogMessage, _super);
    function WarningLogMessage(message) {
        return _super.call(this, "warning", "icons:announcement", message) || this;
    }
    return WarningLogMessage;
}(LogMessage));
//# sourceMappingURL=WarningLogMessage.js.map