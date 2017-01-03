var CommandExecuter = (function () {
    function CommandExecuter() {
        this.executedCommands = new Array();
    }
    CommandExecuter.prototype.executeCommand = function (command) {
        command.execute();
        this.executedCommands.push(command);
    };
    CommandExecuter.prototype.undo = function () {
        var executedCommand = this.executedCommands.pop();
        executedCommand.undo();
    };
    return CommandExecuter;
}());
//# sourceMappingURL=CommandExecuter.js.map