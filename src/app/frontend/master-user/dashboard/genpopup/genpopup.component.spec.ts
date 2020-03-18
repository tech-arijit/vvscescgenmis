import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpopupComponent } from './genpopup.component';

describe('GenpopupComponent', () => {
  let component: GenpopupComponent;
  let fixture: ComponentFixture<GenpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
