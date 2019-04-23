import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  blank_profile: Profile;
  constructor(private profilesService: ProfilesService) {
    this.blank_profile = Profile.createEmptyProfile();
  }

  ngOnInit() {
  }
  addProfile(){
    this.profilesService.addProfile(this.blank_profile.phone_number, this.blank_profile);
    this.blank_profile = Profile.createEmptyProfile();
  }

}
