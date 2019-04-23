import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profiles: Observable<any[]>;
  selectedProfiles: Observable<any>;
  phone: string;
  profileDoc: AngularFirestoreDocument<any>;
  myProfile: BehaviorSubject<number>;
  singleProfile: Observable<any>;
  constructor(private db: AngularFirestore, public snackBar: MatSnackBar) { 
  
  }
  
  public getProfiles(): Observable<any[]>{
    this.profiles = this.db.collection('profiles').valueChanges(); 
    return this.profiles;
  }
  
   public getSelectedProfiles(id: number): Observable<any[]>{
    this.myProfile = new BehaviorSubject(id);
    this.profiles = this.myProfile.pipe(
      switchMap(num => this.db.collection('profiles',ref=> ref.where("hold_by", "==", num)).valueChanges())
    );
    return this.profiles;
  }
  
   public getIndividualProfiles(id: number): Observable<any>{
    //this.selectedProfiles = this.db.collection('profiles',ref=> ref.where("phone_number", "==", id)).valueChanges();
     this.profileDoc = this.db.doc<any>('profiles/'+id.toString());
     this.selectedProfiles = this.profileDoc.valueChanges();
    return this.selectedProfiles;
  }
  
   /*public getSingleProfile(phone_number: number):Observable<any>{
    this.phone= phone_number.toString();
    this.profileDoc = this.db.doc<any>('profiles/'+this.phone);
    this.singleProfile = this.profileDoc.valueChanges();
    return this.singleProfile;
  }*/
  
  
  /*public getSingleProfile(phone_number: number):Observable<Any>{
    this.phone= phone_number.toString();
    this.profileDoc = this.db.doc<Any>('profiles/'+this.phone);
    this.singleProfile = this.profileDoc.valueChanges();
    return this.singleProfile;
  }
  */
  public addProfile(phone_number: number, profile: Profile){
    this.db.collection('profiles').doc(phone_number.toString()).set(JSON.parse(JSON.stringify(profile)))
      .then( _ => this.snackBar.open("Profile is updated. Thank you", "",{
                  duration: 2000,
              }));
  }
}
