var LogMessage = (function () {
    function LogMessage(type, icon, message) {
        this.type = type;
        this.message = message;
        this.icon = icon;
        this.amount = 1;
    }
    LogMessage.prototype.getMessage = function () {
        return this.message;
    };
    LogMessage.prototype.incrementAmount = function () {
        this.amount++;
    };
    return LogMessage;
}());
//# sourceMappingURL=LogMessage.js.map