import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  to: string;
  subject: string;
  message: string;
  actionUrl: string;
  date: string;
  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) {
    this.actionUrl = "https://api-container-davulurikoti860340.codeanyapp.com/sendresults";
  }

  ngOnInit() {
  }

   sendMail(){
     this.getDate();
     this.snackBar.open("Sending Email");
     this.httpClient.post(this.actionUrl,
        {
          "body": this.message,
          "date": this.date,
          "from": "Karthiga R",
          "to": this.to,
          "subject": this.subject
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
  
  getDate(){
    /*var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    var today = dd + '-' + mm + '-' + yyyy;
    this.date = today.toString();*/
   }
}
