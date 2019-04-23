import {Comment} from './comment';
export class Profile{
  constructor(public phone_number: number, 
               public name: string,
               public title: string,
               public technologies:string, 
               public experience: number, 
               public rating: number, 
               public availability: string,
               public email: string,
               public lastUpdatedBy: string,
               public lastUpdatedById: string,
               public currentLocation: string,
               public preferredLocations: string,
               public educationSummery: string,
               public personalInterests: string,
               public isDisplayable: boolean,
               public hold_by: number,
               public comments: Comment[]){}
  
  public static createEmptyProfile(){
    return new Profile(null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, []);
  }
  
  /*public static profilefromJSON(obj: any): Profile{
    return new Profile(obj.phone_number, obj.name, obj.title, obj.technologies, obj.experience, obj.rating, obj.availability,
                      obj.email, obj.lastUpdatedBy, obj.lastUpdatedById, obj.currentLocation, obj.preferredLocations, obj.educationSummery, obj.personalInterests);
  }*/
}
