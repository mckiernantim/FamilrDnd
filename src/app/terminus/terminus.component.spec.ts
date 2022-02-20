import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminusComponent } from './terminus.component';

describe('TerminusComponent', () => {
  let component: TerminusComponent;
  let fixture: ComponentFixture<TerminusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
