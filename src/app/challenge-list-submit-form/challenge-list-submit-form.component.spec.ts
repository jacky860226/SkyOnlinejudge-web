import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListSubmitFormComponent } from './challenge-list-submit-form.component';

describe('ChallengeListSubmitFormComponent', () => {
  let component: ChallengeListSubmitFormComponent;
  let fixture: ComponentFixture<ChallengeListSubmitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeListSubmitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
