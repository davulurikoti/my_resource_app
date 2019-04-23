import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AllProfilesComponent } from './profiles/all-profiles/all-profiles.component';
import { MyProfilesComponent } from './profiles/my-profiles/my-profiles.component';
import { OnholdProfilesComponent } from './profiles/onhold-profiles/onhold-profiles.component';
import { TableDataComponent } from './table-data/table-data.component';
import { ProfilesService } from './services/profiles.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MailsComponent } from './mails/mails.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComposeComponent } from './compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProfilesComponent,
    MyProfilesComponent,
    OnholdProfilesComponent,
    TableDataComponent,
    ViewProfileComponent,
    MailsComponent,
    AddprofileComponent,
    NavbarComponent,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ProfilesService,AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
