import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenmtdComponent } from './genmtd.component';

describe('GenmtdComponent', () => {
  let component: GenmtdComponent;
  let fixture: ComponentFixture<GenmtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenmtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenmtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
