import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitwisemtdComponent } from './unitwisemtd.component';

describe('UnitwisemtdComponent', () => {
  let component: UnitwisemtdComponent;
  let fixture: ComponentFixture<UnitwisemtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitwisemtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitwisemtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
