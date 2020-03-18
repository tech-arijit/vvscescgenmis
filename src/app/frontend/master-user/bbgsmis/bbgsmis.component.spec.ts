import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbgsmisComponent } from './bbgsmis.component';

describe('BbgsmisComponent', () => {
  let component: BbgsmisComponent;
  let fixture: ComponentFixture<BbgsmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbgsmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbgsmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
