import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSubmitComponent } from './problem-submit.component';

describe('ProblemSubmitComponent', () => {
  let component: ProblemSubmitComponent;
  let fixture: ComponentFixture<ProblemSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
