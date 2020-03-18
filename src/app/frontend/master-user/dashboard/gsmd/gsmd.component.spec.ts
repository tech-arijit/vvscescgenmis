import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmdComponent } from './gsmd.component';

describe('GsmdComponent', () => {
  let component: GsmdComponent;
  let fixture: ComponentFixture<GsmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
