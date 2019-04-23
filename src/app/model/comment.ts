export class Comment{
  constructor(public name: string, public comment: string){
    
  }
   public static createEmptyComment(){
    return new Comment(null,null);
  }
}