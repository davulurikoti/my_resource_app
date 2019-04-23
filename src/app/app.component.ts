import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { MailServiceService } from './services/mail-service.service';
import { Mail } from './model/mail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  unreadMails: number = 0;
  mails: Observable<Mail[]>;
  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private mailServiceService: MailServiceService){ 
    
    iconRegistry.addSvgIcon(
        'Compose',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/compose.svg'));
    iconRegistry.addSvgIcon(
        'inbox',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/inbox.svg'));
    iconRegistry.addSvgIcon(
        'accounts',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/accounts.svg'));
    iconRegistry.addSvgIcon(
        'account',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account.svg'));
    iconRegistry.addSvgIcon(
        'addprofile',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/addprofile.svg'));
    
  }
  ngOnInit() {
    console.log('koti');
    this.mails = this.mailServiceService.getMyUnreadMails('839073');
    this.mails.subscribe((m)=>{
      this.unreadMails = m.length;
    })
  }
  
}
