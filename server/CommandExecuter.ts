
class CommandExecuter
{
  private executedCommands : Array<Command>;

  constructor()
  {
    this.executedCommands = new Array();
  }

  executeCommand(command : Command)
  {
    command.execute();
    this.executedCommands.push(command);
  }

  undo()
  {
    let executedCommand = this.executedCommands.pop();
    executedCommand.undo();
  }
}
