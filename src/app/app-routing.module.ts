import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProfilesComponent } from './profiles/all-profiles/all-profiles.component';
import { MyProfilesComponent } from './profiles/my-profiles/my-profiles.component';
import { OnholdProfilesComponent } from './profiles/onhold-profiles/onhold-profiles.component';
import { MailsComponent } from './mails/mails.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ComposeComponent } from './compose/compose.component';

const routes: Routes = [
  { path : 'allprofiles', component: AllProfilesComponent },
  { path : 'myprofiles', component: MyProfilesComponent },
  { path : 'onhold', component: OnholdProfilesComponent },
  { path : 'mails', component: MailsComponent },
  { path : 'addprofile', component: AddprofileComponent },
  { path : 'compose', component: ComposeComponent },
  { path: '**', redirectTo: 'allprofiles'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
