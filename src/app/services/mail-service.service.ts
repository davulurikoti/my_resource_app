import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mail } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  mails: Observable<any[]>;
  myMails: BehaviorSubject<string>;
  constructor(private db: AngularFirestore) { }
  
  public getMails(): Observable<any[]>{
    this.mails = this.db.collection('inbox').valueChanges(); 
    return this.mails;
  }
  
   public getMyMails(id: string): Observable<any[]>{
    this.myMails = new BehaviorSubject(id);
    this.mails = this.myMails.pipe(
      switchMap(num => this.db.collection('inbox',ref=> ref.where("to", "==", num).orderBy('date', 'desc')).valueChanges())
    );
    return this.mails;
  }
  
  public getMyUnreadMails(id: string): Observable<Mail[]>{
    this.myMails = new BehaviorSubject(id);
    this.mails = this.myMails.pipe(
      switchMap(num => this.db.collection('inbox',ref=> ref.where("to", "==", num).where("read","==",false)).valueChanges())
    );
    return this.mails;
  }
  
  public updateMail(id: string, mail: Mail){
    this.db.collection('inbox').doc(id).set(JSON.parse(JSON.stringify(mail))).then( _ => console.log("Flag updated"));
  }
}
