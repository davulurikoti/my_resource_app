import { Component, OnInit } from '@angular/core';
import { ViewProfileService } from '../services/view-profile.service';
import { Profile } from '../model/profile';
import { Comment } from '../model/comment';
import { ProfilesService } from '../services/profiles.service';
import { ExamService } from '../services/exam.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  profileTest: Profile;
  profile: Observable<Profile>;
  currentProfile: Profile;
  currentComment: Comment;
  actionUrl: string;
  examId: string = '1';
 
  currentId: number = 839073;
  constructor(private viewProfileService: ViewProfileService, private profilesService: ProfilesService,
               private examService: ExamService, private httpClient: HttpClient, public snackBar: MatSnackBar) {
     this.profileTest = Profile.createEmptyProfile();
     this.currentProfile = Profile.createEmptyProfile();
     this.currentComment = Comment.createEmptyComment();
     this.actionUrl = this.examService.serverWithApiUrl;
  }

  ngOnInit() {
    this.viewProfileService.currentMessage.subscribe(tprofile => {
      this.profileTest = tprofile;
      if(this.profileTest){
        this.profile = this.profilesService.getIndividualProfiles(this.profileTest.phone_number);
        this.profile.subscribe((p)=>{
          this.currentProfile = p;}
         ); 
      }
     
    });
    
    
  }
  selectThisProfile(){
     this.currentProfile.hold_by = this.currentId;
     this.profilesService.addProfile(this.currentProfile.phone_number, this.currentProfile);
  }
  releaseThisProfile(){
    this.currentProfile.hold_by = null;
    this.profilesService.addProfile(this.currentProfile.phone_number, this.currentProfile);
  }
  addComment(){
    this.currentProfile.comments.push(this.currentComment);
    this.profilesService.addProfile(this.currentProfile.phone_number, this.currentProfile);
    this.currentComment = Comment.createEmptyComment();
  }
  
  sendExam(){
    this.snackBar.open("Sending Email ....");
    this.examId = this.getExamId(this.currentProfile.title);
    this.httpClient.post(this.actionUrl,
        {
          "name": this.currentProfile.name,
          "email": this.currentProfile.email,
          "phone_number": this.currentProfile.phone_number,
          "role_name": this.currentProfile.title,
          "exam": this.examId,
          "score": null,
          "requester_id": this.currentId
      })
        .subscribe(
            data => {
                this.snackBar.open("Email Sent successfully", "",{
                  duration: 2000,
              });
            
            },
            error => {
                this.snackBar.open("Error. Try again later.","", {
                  duration: 2000,
              });
            }
        );    
  }
  
  getExamId(role: string): string{
    if("Java Developer" === role){
      return "1";
    }
    if(".Net Developer" === role){
      return "4";
    }
    if("Python Developer" === role){
      return "3";
    }
    if("Scrum Master" === role){
      return "2";
    }
  }

}
