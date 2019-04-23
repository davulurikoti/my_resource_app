export class Mail{
  constructor(public from: string,
  public subject: string,
  public body: string,
  public read: boolean,
  public id: string,
  public date: string,
  public to: string)
  {}
  public static createEmptyMail(){
    return new Mail(null,null,null,true,null,null,null);
  }
}