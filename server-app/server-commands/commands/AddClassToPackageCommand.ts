class AddClassToPackageCommand extends Command
{
  private umlClass : UMLClass;
  private umlPackage : UMLPackage;

  public constructor(umlClass : UMLClass, umlPackage : UMLPackage)
  {
    super();
    this.umlClass = umlClass;
    this.umlPackage = umlPackage;
  }

  public execute()
  {
    this.umlPackage.addComponent(this.umlClass);
  }

  public undo()
  {
    this.umlPackage.removeComponent(this.umlClass);
  }
}
