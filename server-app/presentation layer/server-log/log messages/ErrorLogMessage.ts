class ErrorLogMessage extends LogMessage
{
  constructor(message : string)
  {
    super("error", "icons:bug-report",  message);
  }
}
