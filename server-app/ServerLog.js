var ServerLog = (function () {
    function ServerLog() {
        this.logMessages = [];
    }
    ServerLog.prototype.getLogMessages = function () {
        return this.logMessages;
    };
    ServerLog.prototype.addInformationMessage = function (message) {
        this.addAmountIfNeccessary(message);
        this.logMessages.unshift(new InformationLogMessage(message));
    };
    ServerLog.prototype.addWarningMessage = function (message) {
        this.addAmountIfNeccessary(message);
        this.logMessages.unshift(new WarningLogMessage(message));
    };
    ServerLog.prototype.addErrorMessage = function (message) {
        this.addAmountIfNeccessary(message);
        this.logMessages.unshift(new ErrorLogMessage(message));
    };
    ServerLog.prototype.addAmountIfNeccessary = function (message) {
        var lastMessage = this.logMessages[0].getMessage();
        if (lastMessage === message)
            this.logMessages[0].incrementAmount();
    };
    return ServerLog;
}());
//# sourceMappingURL=ServerLog.js.map