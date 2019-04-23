import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../model/profile';
import { ProfilesService } from '../services/profiles.service';
import { ViewProfileService } from '../services/view-profile.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() view: string;
  dataSource: DataSource<any>;
  
  displayedColumns = ['name', 'title', 'technologies', 'experience', 'view'];
  constructor(private profilesService: ProfilesService, private viewProfileService: ViewProfileService) {
  
  }
    
  ngOnInit() {
    this.dataSource =  new UserDataSource(this.profilesService, this.view  );
  }

  viewProfile(profile: Profile){
    this.viewProfileService.changeMessage(profile);
  }

}

export class UserDataSource extends DataSource<any> {
  public profiles: Observable<any[]>;
  constructor(private profilesService: ProfilesService, private view: string) {
    super();
     
  }
  connect(): Observable<any[]> {
    if(this.view == "select"){
      return this.profilesService.getSelectedProfiles(839073);
    }
   return this.profilesService.getProfiles();
  }
  disconnect() {}
}
