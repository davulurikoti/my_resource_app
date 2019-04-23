import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnholdProfilesComponent } from './onhold-profiles.component';

describe('OnholdProfilesComponent', () => {
  let component: OnholdProfilesComponent;
  let fixture: ComponentFixture<OnholdProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnholdProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnholdProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
