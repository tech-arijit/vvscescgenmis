import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowergenmisComponent } from './powergenmis.component';

describe('PowergenmisComponent', () => {
  let component: PowergenmisComponent;
  let fixture: ComponentFixture<PowergenmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowergenmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowergenmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
