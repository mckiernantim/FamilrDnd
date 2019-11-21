import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombsatComponent } from './combsat.component';

describe('CombsatComponent', () => {
  let component: CombsatComponent;
  let fixture: ComponentFixture<CombsatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombsatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
