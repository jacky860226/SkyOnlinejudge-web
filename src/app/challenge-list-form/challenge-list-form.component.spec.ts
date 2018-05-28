import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListFormComponent } from './challenge-list-form.component';

describe('ChallengeListFormComponent', () => {
  let component: ChallengeListFormComponent;
  let fixture: ComponentFixture<ChallengeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
