import { Component, OnInit } from '@angular/core';

import { MailServiceService } from '../services/mail-service.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Mail } from '../model/mail';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  dataSource: DataSource<any>;
  currentMail: Mail;
  displayedColumns = ['from', 'subject', 'date', 'view'];
  constructor(private mailServiceService: MailServiceService) {
    this.currentMail = Mail.createEmptyMail();
  }

  ngOnInit() {
    this.dataSource =  new UserDataSource(this.mailServiceService);
  }
  public displayBody(mail: Mail){
    mail.read = true;
    this.mailServiceService.updateMail(mail.id,mail);
    this.currentMail = mail;
  }

}

export class UserDataSource extends DataSource<any> {
  public mails: Observable<any[]>;
  constructor(private mailServiceService: MailServiceService) {
    super();
     
  }
  connect(): Observable<any[]> {
   return this.mailServiceService.getMyMails('839073');
  }
  disconnect() {}
}
