import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {
  current_profile: Profile; 
  private messageSource = new BehaviorSubject(this.current_profile);
  currentMessage = this.messageSource.asObservable();
  
  constructor() { 
   this.current_profile = Profile.createEmptyProfile();
  }
  
  changeMessage(profile: Profile) {
    this.messageSource.next(profile);
  }
}
