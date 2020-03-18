import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumpopupComponent } from './columpopup.component';

describe('ColumpopupComponent', () => {
  let component: ColumpopupComponent;
  let fixture: ComponentFixture<ColumpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
